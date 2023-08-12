param(
    [string]$commitMessage,
    [string]$userName,
    [string]$userEmail
)

# Verificar si se proporcionó un mensaje de commit
if (-not $commitMessage) {
    Write-Host "Uso: .\git-upload.ps1 -commitMessage 'mensaje del commit'"
    exit
}

# Inicializar repositorio si no existe
if (-not (Test-Path .git)) {
    git init
    Write-Host "Repositorio Git inicializado."
}
Copy-Item .\.env .\.env.example
# Agregar archivos a la etapa de preparación
git add .

# Hacer commit con el mensaje proporcionado
git commit -m $commitMessage

# Configurar nombre de usuario y email si no están configurados
if (-not (git config --global --get user.name)) {
    git config --global user.name $userName
}
if (-not (git config --global --get user.email)) {
    git config --global user.email $userEmail
}

# Subir cambios a la rama master del repositorio remoto
git push
