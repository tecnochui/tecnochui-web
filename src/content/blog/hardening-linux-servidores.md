---
title: "Hardening de servidores Linux: la checklist esencial"
description: "Diez pasos concretos para reducir la superficie de ataque de un servidor Debian o Ubuntu recién instalado, antes de ponerlo en producción."
pubDate: 2026-07-10
author: Tecnochui
tags: [linux, ciberseguridad]
readingTime: "5 min"
---

Un servidor recién instalado no está listo para producción solo porque arrancó correctamente. Estos son los pasos que aplicamos antes de exponer cualquier servicio.

## Acceso y autenticación

```bash
# Deshabilitar login root por SSH
sudo sed -i 's/^#PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config

# Forzar autenticación por llave, no por contraseña
sudo sed -i 's/^#PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config

sudo systemctl restart sshd
```

## Firewall local con UFW

- Denegar todo el tráfico entrante por defecto
- Permitir solo los puertos estrictamente necesarios (22, 80, 443)
- Habilitar límite de intentos en SSH con `ufw limit`

```bash
sudo ufw default deny incoming
sudo ufw allow 80,443/tcp
sudo ufw limit 22/tcp
sudo ufw enable
```

## Actualizaciones automáticas de seguridad

En Debian/Ubuntu, `unattended-upgrades` aplica parches de seguridad sin intervención manual:

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

> Un servidor "hardening" no es un servidor invulnerable. Es un servidor donde cada puerta abierta tiene una razón documentada para estarlo.

## Checklist final antes de producción

1. Usuario no-root con `sudo` configurado
2. SSH solo por llave, puerto no estándar si aplica
3. `ufw` o `iptables` activo con reglas mínimas
4. Actualizaciones de seguridad automáticas
5. Logs centralizados (rsyslog o similar) con retención definida

Diez minutos de hardening ahorran, en promedio, muchas más horas de respuesta a incidentes.
