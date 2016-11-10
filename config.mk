copy-stamp_main: INPUT := srcs/jquery.template.module.js

# Stamp text to apply to each files
STAMP_TXT = $(notdir $(OUTPUT)) (`date +'%Y.%m.%d'`) by Blaise Lengrand\n
