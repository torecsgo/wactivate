@echo off

mkdir "%windir%\System32\spp\tokens\skus\Enterprise\"
copy "Enterprise" "%windir%\System32\spp\tokens\skus\Enterprise\"
cscript.exe %windir%\system32\slmgr.vbs /rilc
cscript.exe %windir%\system32\slmgr.vbs /upk >nul 2>&1
cscript.exe %windir%\system32\slmgr.vbs /ckms >nul 2>&1
cscript.exe %windir%\system32\slmgr.vbs /cpky >nul 2>&1
cscript.exe %windir%\system32\slmgr.vbs /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
slmgr.vbs /skms kms.teevee.asia 
slmgr.vbs /ato


pause