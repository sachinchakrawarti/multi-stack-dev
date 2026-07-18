# Update Table of Contents Script
Get-ChildItem -Recurse -Filter "*.md" | ForEach-Object {
    Write-Host $_.FullName
}
