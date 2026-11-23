#!/usr/bin/env python3
"""Detect whether documented home endpoint(s) exist without changing the API contract."""
import re
from pathlib import Path
import sys
contract = Path(sys.argv[1] if len(sys.argv)>1 else 'api/openapi.yaml')
if not contract.is_file():
    print(f'ERROR: OpenAPI not found at {contract}')
    raise SystemExit(2)
text = contract.read_text(encoding='utf-8')
paths = re.findall(r'^  (/[^\s:]+):\s*$',text,re.M)
print('Documented paths:', ', '.join(paths) or '(none)')
checks={
  'home aggregate data':any(re.search(r'/home(?:$|/)',p) for p in paths),
  'events listing':any(re.search(r'/events(?:$|/)',p) for p in paths),
  'practices listing':any(re.search(r'/practices(?:$|/)',p) for p in paths),
}
for key,ok in checks.items():print(('OK' if ok else 'MISSING')+': '+key)
if not all(checks.values()):
  print('CONTRACT GAP: API paths needed by homepage are not documented; request backend contract approval.')
  raise SystemExit(1)
print('Endpoint presence check passed. Schema/HTTP behavior still needs manual review.')
