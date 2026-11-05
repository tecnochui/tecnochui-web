---
title: "Introducción a la ciberseguridad perimetral"
description: "Firewalls, segmentación y políticas de acceso: los tres pilares que definen qué tan expuesta está tu red antes de que ocurra un incidente. Guía para pymes."
pubDate: 2026-07-18
author: Tecnochui
tags: [ciberseguridad]
readingTime: "6 min"
---

La seguridad perimetral es la primera línea de defensa entre tu red interna y el resto de internet. No es la única capa que necesitas, pero sigue siendo la base.

## ¿Qué protege realmente un firewall perimetral?

Un firewall bien configurado (Sophos XG, pfSense, OPNsense) responde a una pregunta simple: **¿quién puede hablar con quién, y en qué puerto?**

Las reglas típicas que aplicamos en una implementación inicial:

1. Denegar todo el tráfico entrante por defecto
2. Permitir explícitamente solo los servicios publicados (VPN, correo, VPN)
3. Registrar y alertar sobre intentos de conexión bloqueados repetidos

## Segmentación: no todo debe estar en la misma red

Una PC de un usuario administrativo y un NAS de respaldos no deberían compartir el mismo segmento de red que las cámaras IP o los dispositivos IoT.

```bash
# Ejemplo simplificado de reglas en pfSense/OPNsense (pf syntax)
block in on $wan
pass in on $lan from $lan_net to any
pass in on $iot proto tcp to $lan_net port { 80 443 } # solo lo estrictamente necesario
```

> Segmentar no es desconfiar de tus propios equipos: es limitar cuánto puede moverse un atacante si uno solo de ellos se ve comprometido.

## Una checklist mínima de auditoría

- Revisión trimestral de reglas activas (elimina lo que ya no se usa)
- Logs centralizados con alertas ante patrones anómalos
- MFA obligatorio en cualquier acceso remoto administrativo

La ciberseguridad perimetral no es un proyecto que se "termina": es un proceso que se revisa, documenta y ajusta con cada cambio en tu infraestructura.
