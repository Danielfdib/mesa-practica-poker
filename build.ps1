# Genera las páginas que vienen de las fuentes del curso:
#   mesa.html          <- ../practica/mesa-practica.html (la fuente del artifact, sin doctype/head)
#   calculadoras.html  <- ../planillas/planillas-poker.html (documento completo)
# A las dos les agrega la barra de navegación (build/nav.html) y el pie de Estudio Raíz (build/credito.html).
# index.html y lecciones.html se editan a mano. Después de correrlo: commit + push (Vercel publica solo).
$ErrorActionPreference = 'Stop'
$utf8 = New-Object Text.UTF8Encoding($false)
function Leer($ruta) { [IO.File]::ReadAllText((Join-Path $PSScriptRoot $ruta), [Text.Encoding]::UTF8) }
function Escribir($nombre, $texto) {
  $out = Join-Path $PSScriptRoot $nombre
  [IO.File]::WriteAllText($out, $texto, $utf8)
  Write-Output "$nombre generado ($((Get-Item $out).Length) bytes)"
}
function Nav($activo) {
  (Leer 'build\nav.html').Replace("<a href=""$activo"">", "<a href=""$activo"" aria-current=""page"">")
}
$credito = Leer 'build\credito.html'
$fuentes = '<link rel="preconnect" href="https://fonts.googleapis.com">'

# ---------- Mesa ----------
$html = Leer '..\practica\mesa-practica.html'
# Textos de la versión pública (la fuente está pensada para usarla con Claude).
$html = $html.Replace('<h3>Análisis de Claude</h3>', '<h3>Revisá tu sesión</h3>')
$html = $html.Replace('Te digo cuál podría haber sido tu mejor resultado, qué manos lo movieron y qué conclusiones sumar a tus reglas. Veo las cartas de todos, pero juzgo cada decisión solo con lo que vos sabías en ese momento.', 'Copiá el historial de la sesión y revisá las manos clave con el método de 5 pasos de la Lección 5.')
$html = $html.Replace('El análisis automático no está disponible en esta vista. Tocá "Copiar historial" y pegalo en Claude Code: lo analizo ahí y lo guardo en analisis-manos/.', 'Copiá el historial y revisá las manos clave con el método de 5 pasos de la Lección 5 (Lecciones → 5).')
$html = $html.Replace('Copiado. Pegalo en Claude Code.', 'Historial copiado al portapapeles.')
$html = $html.Replace("'Vos (Daniel)'", "'Vos'")
$cut = $html.IndexOf('</style>') + '</style>'.Length
$head = $html.Substring(0, $cut)
$body = $html.Substring($cut)
$mesa = '<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Mesa 6-max NL2 para practicar poker contra 5 rivales bot con posiciones rotativas y resumen de la sesi&oacute;n.">
<meta name="author" content="Estudio Ra&iacute;z">
<link rel="canonical" href="https://mesa-practica-poker.vercel.app/mesa">
<link rel="icon" href="assets/logo.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/nav.css">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
' + $head + '
</head>
<body>
' + (Nav 'mesa') + $body + '
' + $credito + '
</body>
</html>
'
Escribir 'mesa.html' $mesa

# ---------- Calculadoras ----------
$calc = Leer '..\planillas\planillas-poker.html'
$calc = $calc.Replace('<title>Planillas de Poker NL2</title>', '<title>Calculadoras · Poker NL2</title>
<meta name="description" content="Rangos preflop por posici&oacute;n, outs y pot odds, bankroll y checklist antes de jugar poker NL2.">
<meta name="author" content="Estudio Ra&iacute;z">
<link rel="canonical" href="https://mesa-practica-poker.vercel.app/calculadoras">
<link rel="icon" href="assets/logo.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/nav.css">')
$i = $calc.IndexOf('<body>') + '<body>'.Length
$calc = $calc.Substring(0, $i) + "`n" + (Nav 'calculadoras') + $calc.Substring($i)
$j = $calc.LastIndexOf('</body>')
$calc = $calc.Substring(0, $j) + $credito + "`n" + $calc.Substring($j)
Escribir 'calculadoras.html' $calc
