REM  This file is part of EWS-4-TbSync.
REM 
REM  TbSync is free software: you can redistribute it and/or modify
REM  it under the terms of the GNU General Public License as published by
REM  the Free Software Foundation, either version 3 of the License, or
REM  (at your option) any later version.
REM 
REM  TbSync is distributed in the hope that it will be useful,
REM  but WITHOUT ANY WARRANTY; without even the implied warranty of
REM  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
REM  GNU General Public License for more details.
REM 
REM  You should have received a copy of the GNU General Public License
REM  along with EWS-4-TbSync. If not, see <https://www.gnu.org/licenses/>.

del EWS-4-TbSync.xpi
"C:\Program Files\7-Zip\7zG.exe" a -tzip EWS-4-TbSync.xpi content locale skin chrome.manifest install.rdf bootstrap.js LICENSE


