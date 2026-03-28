$ErrorActionPreference = "Stop"

$ProjectPath = "C:\Python\Projects\Upwork Portfolio\Website"
$AppPath = "$ProjectPath\03-app"
$AppName = "portfolio-site"
$FullAppPath = "$AppPath\$AppName"

Write-Host "Starting frontend setup..." -ForegroundColor Cyan

Set-Location $ProjectPath

# Check Node.js tools first
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed or not on PATH." -ForegroundColor Red
    Write-Host "Install Node.js LTS, then reopen VS Code and try again." -ForegroundColor Yellow
    exit 1
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm is not available." -ForegroundColor Red
    Write-Host "Reinstall Node.js LTS and ensure it is added to PATH." -ForegroundColor Yellow
    exit 1
}

if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "npx is not available." -ForegroundColor Red
    Write-Host "Reinstall Node.js LTS and ensure it is added to PATH." -ForegroundColor Yellow
    exit 1
}

Write-Host "Node.js detected:" -ForegroundColor Green
node -v
npm -v
npx -v

# Ensure 03-app exists
if (-Not (Test-Path $AppPath)) {
    Write-Host "Creating 03-app folder..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $AppPath | Out-Null
}

Set-Location $AppPath

# Create Next.js app
if (-Not (Test-Path $FullAppPath)) {
    Write-Host "Creating Next.js app..." -ForegroundColor Yellow

    npx create-next-app@latest $AppName `
        --typescript `
        --tailwind `
        --eslint `
        --app `
        --src-dir `
        --import-alias "@/*" `
        --use-npm
} else {
    Write-Host "Next.js app already exists. Skipping creation..." -ForegroundColor DarkYellow
}

if (-Not (Test-Path $FullAppPath)) {
    Write-Host "App folder was not created. Stopping." -ForegroundColor Red
    exit 1
}

Set-Location $FullAppPath

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Clean default page
Write-Host "Cleaning default template..." -ForegroundColor Yellow
$PageFile = "src/app/page.tsx"

@"
export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Aman Naidu Portfolio
      </h1>
      <p className="mt-4 text-lg">
        AI • Data • Automation • Systems
      </p>
    </main>
  );
}
"@ | Set-Content $PageFile

Write-Host "Frontend setup complete." -ForegroundColor Green
Write-Host ""
Write-Host "To run the app:" -ForegroundColor Cyan
Write-Host "cd `"$FullAppPath`"" -ForegroundColor White
Write-Host "npm run dev" -ForegroundColor White