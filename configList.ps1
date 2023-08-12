# Ejecutar el comando git config --list y almacenar la salida en una variable
$configOutput = git config --list

# Convertir la salida a un hashtable
$configData = $configOutput | ForEach-Object {
    $key, $value = $_ -split "=", 2
    @{ $key.Trim() = $value.Trim() }
}

# Convertir el hashtable a formato JSON
$jsonOutput = $configData | ConvertTo-Json

# Mostrar el resultado JSON
Write-Output $jsonOutput
