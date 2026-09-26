# Genera web/index.html a partir de practica/mesa-practica.html (la fuente del artifact).
# El artifact no lleva doctype/head; para Vercel se agrega el esqueleto HTML completo.
$ErrorActionPreference = 'Stop'
$src = Join-Path $PSScriptRoot '..\practica\mesa-practica.html'
$out = Join-Path $PSScriptRoot 'index.html'
$html = [IO.File]::ReadAllText($src, [Text.Encoding]::UTF8)
$cut = $html.IndexOf('</style>') + '</style>'.Length
$head = $html.Substring(0, $cut)
$body = $html.Substring($cut)
$page = @"
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Mesa 6-max NL2 para practicar poker contra rivales bot con posiciones rotativas y resumen de la sesi&oacute;n.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
$head
</head>
<body>
$body
</body>
</html>
"@
[IO.File]::WriteAllText($out, $page, (New-Object Text.UTF8Encoding($false)))
Write-Output "index.html generado ($((Get-Item $out).Length) bytes)"
