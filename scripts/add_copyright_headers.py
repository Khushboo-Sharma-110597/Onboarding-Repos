from pathlib import Path
from datetime import datetime
import sys

header = f"""/*
 * Copyright IBM Corp. {datetime.now().year}
 */

"""

for p in sys.argv[1:] or ["."]:
    path = Path(p)
    files = [path] if path.is_file() and path.suffix == ".java" else path.rglob("*.java")
    for file in files:
        text = file.read_text(encoding="utf-8")
        if "Copyright IBM Corp" not in text[:300]:
            file.write_text(header + text, encoding="utf-8")
            print(f"updated {file}")

# Made with Bob
