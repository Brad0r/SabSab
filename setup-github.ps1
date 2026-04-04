param(
  [string]$RepoUrl
)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git n'est pas installé sur ce PC." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path ".git")) {
  git init
}

$branch = git branch --show-current 2>$null
if ([string]::IsNullOrWhiteSpace($branch)) {
  git checkout -b main 2>$null
  if ($LASTEXITCODE -ne 0) {
    git branch -M main
  }
}

$existingRemote = git remote get-url origin 2>$null
if (-not $existingRemote) {
  if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    $RepoUrl = Read-Host "Colle l'URL HTTPS de ton repo GitHub"
  }

  if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "Aucune URL de repo fournie." -ForegroundColor Red
    exit 1
  }

  git remote add origin $RepoUrl
} else {
  Write-Host "Remote origin déjà configuré : $existingRemote" -ForegroundColor Cyan
}

$userName = git config user.name 2>$null
$userEmail = git config user.email 2>$null
if ([string]::IsNullOrWhiteSpace($userName) -or [string]::IsNullOrWhiteSpace($userEmail)) {
  Write-Host "Configure Git une seule fois avec :" -ForegroundColor Yellow
  Write-Host "git config --global user.name \"Ton Nom\"" -ForegroundColor Cyan
  Write-Host "git config --global user.email \"ton@email.com\"" -ForegroundColor Cyan
  exit 1
}

git add -A

git rev-parse --verify HEAD 2>$null
$hasCommit = $LASTEXITCODE -eq 0

git diff --cached --quiet
$hasStagedChanges = $LASTEXITCODE -ne 0

if (-not $hasCommit) {
  git commit -m "Initial commit"
} elseif ($hasStagedChanges) {
  git commit -m "Préparation GitHub"
} else {
  Write-Host "Aucun nouveau changement à commit pour l'instant." -ForegroundColor Yellow
}

$branch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($branch)) {
  $branch = 'main'
}

git push -u origin $branch

Write-Host "Connexion GitHub terminée ✅" -ForegroundColor Green
Write-Host "Pour les prochaines mises à jour : npm run publish:update" -ForegroundColor Cyan
