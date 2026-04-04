param(
  [string]$Message
)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git n'est pas installé sur ce PC." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path ".git")) {
  Write-Host "Ce dossier n'est pas encore connecté à GitHub." -ForegroundColor Yellow
  Write-Host "Lance d'abord : npm run github:setup" -ForegroundColor Cyan
  exit 1
}

$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
  Write-Host "Aucun remote 'origin' n'est configuré." -ForegroundColor Yellow
  Write-Host "Lance d'abord : npm run github:setup" -ForegroundColor Cyan
  exit 1
}

$userName = git config user.name 2>$null
$userEmail = git config user.email 2>$null
if ([string]::IsNullOrWhiteSpace($userName) -or [string]::IsNullOrWhiteSpace($userEmail)) {
  Write-Host "Configure Git une seule fois avec :" -ForegroundColor Yellow
  Write-Host "git config --global user.name \"Ton Nom\"" -ForegroundColor Cyan
  Write-Host "git config --global user.email \"ton@email.com\"" -ForegroundColor Cyan
  exit 1
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = Read-Host "Message du commit"
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Mise à jour du site"
}

git add -A

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "Aucun changement à publier." -ForegroundColor Yellow
  exit 0
}

git commit -m $Message

$branch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($branch)) {
  $branch = 'main'
}

git push -u origin $branch

Write-Host "Publication envoyée sur GitHub ✅" -ForegroundColor Green
Write-Host "Si GitHub Pages est activé, le site se mettra à jour automatiquement après le push." -ForegroundColor Cyan
