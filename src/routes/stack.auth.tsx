import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import Books from '../screens/App/Books/books.component'
import NewBooks from '../screens/App/NewBooks/new-books.component'
import OldBooks from '../screens/App/OldBooks/old-books.component'
import Genesis from '../screens/App/OldBooks/Genesis/genesis.component'
import Gn1 from '../screens/App/OldBooks/Genesis/Gn1/gn1.component'
import Gn2 from '../screens/App/OldBooks/Genesis/Gn2/gn2.component'
import Gn3 from '../screens/App/OldBooks/Genesis/Gn3/gn3.component'
import Gn4 from '../screens/App/OldBooks/Genesis/Gn4/gn4.component'
import Gn5 from '../screens/App/OldBooks/Genesis/Gn5/gn5.component'
import Gn6 from '../screens/App/OldBooks/Genesis/Gn6/gn6.component'
import Gn7 from '../screens/App/OldBooks/Genesis/Gn7/gn7.component'
import Gn8 from '../screens/App/OldBooks/Genesis/Gn8/gn8.component'
import Gn9 from '../screens/App/OldBooks/Genesis/Gn9/gn9.component'
import Gn10 from '../screens/App/OldBooks/Genesis/Gn10/gn10.component'
import Gn11 from '../screens/App/OldBooks/Genesis/Gn11/gn11.component'
import Gn12 from '../screens/App/OldBooks/Genesis/Gn12/gn12.component'
import Gn13 from '../screens/App/OldBooks/Genesis/Gn13/gn13.component'
import Gn14 from '../screens/App/OldBooks/Genesis/Gn14/gn14.component'
import Gn15 from '../screens/App/OldBooks/Genesis/Gn15/gn15.component'
import Gn16 from '../screens/App/OldBooks/Genesis/Gn16/gn16.component'
import Gn17 from '../screens/App/OldBooks/Genesis/Gn17/gn17.component'
import Gn18 from '../screens/App/OldBooks/Genesis/Gn18/gn18.component'
import Gn19 from '../screens/App/OldBooks/Genesis/Gn19/gn19.component'
import Gn20 from '../screens/App/OldBooks/Genesis/Gn20/gn20.component'
import Gn21 from '../screens/App/OldBooks/Genesis/Gn21/gn21.component'
import Gn22 from '../screens/App/OldBooks/Genesis/Gn22/gn22.component'
import Gn23 from '../screens/App/OldBooks/Genesis/Gn23/gn23.component'
import Gn24 from '../screens/App/OldBooks/Genesis/Gn24/gn24.component'
import Gn25 from '../screens/App/OldBooks/Genesis/Gn25/gn25.component'
import Gn26 from '../screens/App/OldBooks/Genesis/Gn26/gn26.component'
import Gn27 from '../screens/App/OldBooks/Genesis/Gn27/gn27.component'
import Gn28 from '../screens/App/OldBooks/Genesis/Gn28/gn28.component'
import Gn29 from '../screens/App/OldBooks/Genesis/Gn29/gn29.component'
import Gn30 from '../screens/App/OldBooks/Genesis/Gn30/gn30.component'
import Gn31 from '../screens/App/OldBooks/Genesis/Gn31/gn31.component'
import Gn32 from '../screens/App/OldBooks/Genesis/Gn32/gn32.component'
import Gn33 from '../screens/App/OldBooks/Genesis/Gn33/gn33.component'
import Gn34 from '../screens/App/OldBooks/Genesis/Gn34/gn34.component'
import Gn35 from '../screens/App/OldBooks/Genesis/Gn35/gn35.component'
import Gn36 from '../screens/App/OldBooks/Genesis/Gn36/gn36.component'
import Gn37 from '../screens/App/OldBooks/Genesis/Gn37/gn37.component'
import Gn38 from '../screens/App/OldBooks/Genesis/Gn38/gn38.component'
import Gn39 from '../screens/App/OldBooks/Genesis/Gn39/gn39.component'
import Gn40 from '../screens/App/OldBooks/Genesis/Gn40/gn40.component'
import Gn41 from '../screens/App/OldBooks/Genesis/Gn41/gn41.component'
import Gn42 from '../screens/App/OldBooks/Genesis/Gn42/gn42.component'
import CreateProfile from '../components/CreateProfile/CreateProfile.component'
import PlayerAudio from '../screens/App/PlayerAudio/player-audio.component'
import Profile from '../screens/App/Profile/profile.component'
import Credits from '../screens/App/Credits/credits.component'
import Config from '../screens/App/Config/config.component'
import UpdateName from '../components/UpdateName/update-name.component'
import UpdateEmail from '../components/UpdateEmail/update-email.component'
import Themes from '../screens/App/Themes/themes.component'

import Exodo from '../screens/App/OldBooks/Exodos/exodo.component'
import Ex43 from '../screens/App/OldBooks/Exodos/Ex43/ex43.component'
import Ex44 from '../screens/App/OldBooks/Exodos/Ex44/ex44.component'
import Ex45 from '../screens/App/OldBooks/Exodos/Ex45/ex45.component'
import Ex46 from '../screens/App/OldBooks/Exodos/Ex46/ex46.component'
import Ex47 from '../screens/App/OldBooks/Exodos/Ex47/ex47.component'
import Ex48 from '../screens/App/OldBooks/Exodos/Ex48/ex48.component'
import Ex49 from '../screens/App/OldBooks/Exodos/Ex49/ex49.component'
import Ex50 from '../screens/App/OldBooks/Exodos/Ex50/ex50.component'
import Ex51 from '../screens/App/OldBooks/Exodos/Ex51/ex51.component'
import Ex52 from '../screens/App/OldBooks/Exodos/Ex52/ex52.component'
import Ex53 from '../screens/App/OldBooks/Exodos/Ex53/ex53.component'
import Ex54 from '../screens/App/OldBooks/Exodos/Ex54/ex54.component'
import Ex55 from '../screens/App/OldBooks/Exodos/Ex55/ex55.component'
import Ex56 from '../screens/App/OldBooks/Exodos/Ex56/ex56.component'
import Ex57 from '../screens/App/OldBooks/Exodos/Ex57/ex57.component'
import Ex58 from '../screens/App/OldBooks/Exodos/Ex58/ex58.component'
import Ex59 from '../screens/App/OldBooks/Exodos/Ex59/ex59.component'
import Ex60 from '../screens/App/OldBooks/Exodos/Ex60/ex60.component'

import Romanos from '../screens/App/NewBooks/Romanos/romanos.component'
import Rom61 from '../screens/App/NewBooks/Romanos/Rom61/rom61.component'
import Rom62 from '../screens/App/NewBooks/Romanos/Rom62/rom62.component'
import Rom63 from '../screens/App/NewBooks/Romanos/Rom63/rom63.component'
import Rom64 from '../screens/App/NewBooks/Romanos/Rom64/rom64.component'
import Rom65 from '../screens/App/NewBooks/Romanos/Rom65/rom65.component'
import Rom66 from '../screens/App/NewBooks/Romanos/Rom66/rom66.component'
import Rom67 from '../screens/App/NewBooks/Romanos/Rom67/rom67.component'
import Rom68 from '../screens/App/NewBooks/Romanos/Rom68/rom68.component'
import Rom69 from '../screens/App/NewBooks/Romanos/Rom69/rom69.component'
import Rom70 from '../screens/App/NewBooks/Romanos/Rom70/rom70.component'
import Rom71 from '../screens/App/NewBooks/Romanos/Rom71/rom71.component'
import Rom72 from '../screens/App/NewBooks/Romanos/Rom72/rom72.component'
import Rom73 from '../screens/App/NewBooks/Romanos/Rom73/rom73.component'
import Rom74 from '../screens/App/NewBooks/Romanos/Rom74/rom74.component'

import Levitico from '../screens/App/OldBooks/Leviticos/leviticos.component'
import Lv75 from '../screens/App/OldBooks/Leviticos/Lv75/lv75.component'
import Lv76 from '../screens/App/OldBooks/Leviticos/Lv76/lv76.component'
import Lv77 from '../screens/App/OldBooks/Leviticos/Lv77/lv77.component'
import Lv78 from '../screens/App/OldBooks/Leviticos/Lv78/lv78.component'
import Lv79 from '../screens/App/OldBooks/Leviticos/Lv79/lv79.component'
import Lv80 from '../screens/App/OldBooks/Leviticos/Lv80/lv80.component'
import Lv81 from '../screens/App/OldBooks/Leviticos/Lv81/lv81.component'
import Lv82 from '../screens/App/OldBooks/Leviticos/Lv82/lv82.component'
import Lv83 from '../screens/App/OldBooks/Leviticos/Lv83/lv83.component'
import Lv84 from '../screens/App/OldBooks/Leviticos/Lv84/lv84.component'
import Lv85 from '../screens/App/OldBooks/Leviticos/Lv85/lv85.component'
import Lv86 from '../screens/App/OldBooks/Leviticos/Lv86/lv86.component'

import Hebreus from '../screens/App/NewBooks/Hebreus/hebreus.component'
import Hb87 from '../screens/App/NewBooks/Hebreus/Hb87/hb87.component'
import Hb88 from '../screens/App/NewBooks/Hebreus/Hb88/hb88.component'
import Hb89 from '../screens/App/NewBooks/Hebreus/Hb89/hb89.component'
import Hb90 from '../screens/App/NewBooks/Hebreus/Hb90/hb90.component'
import Hb91 from '../screens/App/NewBooks/Hebreus/Hb91/hb91.component'
import Hb92 from '../screens/App/NewBooks/Hebreus/Hb92/hb92.component'
import Hb93 from '../screens/App/NewBooks/Hebreus/Hb93/hb93.component'
import Hb94 from '../screens/App/NewBooks/Hebreus/Hb94/hb94.component'
import Hb95 from '../screens/App/NewBooks/Hebreus/Hb95/hb95.component'
import Hb96 from '../screens/App/NewBooks/Hebreus/Hb96/hb96.component'
import Hb97 from '../screens/App/NewBooks/Hebreus/Hb97/hb97.component'
import Hb98 from '../screens/App/NewBooks/Hebreus/Hb98/hb98.component'

import Numeros from '../screens/App/OldBooks/Numeros/numeros.component'
import Num99 from '../screens/App/OldBooks/Numeros/Num99/num99.component'
import Num100 from '../screens/App/OldBooks/Numeros/Num100/num100.component'
import Num101 from '../screens/App/OldBooks/Numeros/Num101/num101.component'
import Num102 from '../screens/App/OldBooks/Numeros/Num102/num102.component'
import Num103 from '../screens/App/OldBooks/Numeros/Num103/num103.component'
import Num104 from '../screens/App/OldBooks/Numeros/Num104/num104.component'
import Num105 from '../screens/App/OldBooks/Numeros/Num105/num105.component'
import Num106 from '../screens/App/OldBooks/Numeros/Num106/num106.component'
import Num107 from '../screens/App/OldBooks/Numeros/Num107/num107.component'
import Num108 from '../screens/App/OldBooks/Numeros/Num108/num108.component'
import Num109 from '../screens/App/OldBooks/Numeros/Num109/num109.component'
import Num110 from '../screens/App/OldBooks/Numeros/Num110/num110.component'
import Num111 from '../screens/App/OldBooks/Numeros/Num111/num111.component'
import Num112 from '../screens/App/OldBooks/Numeros/Num112/num112.component'
import Num113 from '../screens/App/OldBooks/Numeros/Num113/num113.component'
import Num114 from '../screens/App/OldBooks/Numeros/Num114/num114.component'

import Galatas from '../screens/App/NewBooks/Galatas/galatas.component'
import Gl115 from '../screens/App/NewBooks/Galatas/Gl115/gl115.component'
import Gl116 from '../screens/App/NewBooks/Galatas/Gl116/gl116.component'
import Gl117 from '../screens/App/NewBooks/Galatas/Gl117/gl117.component'
import Gl118 from '../screens/App/NewBooks/Galatas/Gl118/gl118.component'
import Gl119 from '../screens/App/NewBooks/Galatas/Gl119/gl119.component'
import Gl120 from '../screens/App/NewBooks/Galatas/Gl120/gl120.component'

import Deuteronomio from '../screens/App/OldBooks/Deuteronomio/deuteronomio.component'
import Deut121 from '../screens/App/OldBooks/Deuteronomio/Deut121/deut121.component'
import Deut122 from '../screens/App/OldBooks/Deuteronomio/Deut122/deut122.component'
import Deut123 from '../screens/App/OldBooks/Deuteronomio/Deut123/deut123.component'
import Deut124 from '../screens/App/OldBooks/Deuteronomio/Deut124/deut124.component'
import Deut125 from '../screens/App/OldBooks/Deuteronomio/Deut125/deut125.component'
import Deut126 from '../screens/App/OldBooks/Deuteronomio/Deut126/deut126.component'
import Deut127 from '../screens/App/OldBooks/Deuteronomio/Deut127/deut127.component'
import Deut128 from '../screens/App/OldBooks/Deuteronomio/Deut128/deut128.component'
import Deut129 from '../screens/App/OldBooks/Deuteronomio/Deut129/deut129.component'
import Deut130 from '../screens/App/OldBooks/Deuteronomio/Deut130/deut130.component'
import Deut131 from '../screens/App/OldBooks/Deuteronomio/Deut131/deut131.component'
import Deut132 from '../screens/App/OldBooks/Deuteronomio/Deut132/deut132.component'
import Deut133 from '../screens/App/OldBooks/Deuteronomio/Deut133/deut133.component'
import Deut134 from '../screens/App/OldBooks/Deuteronomio/Deut134/deut134.component'
import Deut135 from '../screens/App/OldBooks/Deuteronomio/Deut135/deut135.component'
import Deut136 from '../screens/App/OldBooks/Deuteronomio/Deut136/deut136.component'
import Deut137 from '../screens/App/OldBooks/Deuteronomio/Deut137/deut137.component'
import Deut138 from '../screens/App/OldBooks/Deuteronomio/Deut138/deut138.component'
import Deut139 from '../screens/App/OldBooks/Deuteronomio/Deut139/deut139.component'

import Tiago from '../screens/App/NewBooks/Tiago/tiago.component'
import Tg140 from '../screens/App/NewBooks/Tiago/Tg140/tg140.component'
import Tg141 from '../screens/App/NewBooks/Tiago/Tg141/tg141.component'
import Tg142 from '../screens/App/NewBooks/Tiago/Tg142/tg142.component'
import Tg143 from '../screens/App/NewBooks/Tiago/Tg143/tg143.component'

import Josue from '../screens/App/OldBooks/Josue/josue.component'
import Jos144 from '../screens/App/OldBooks/Josue/Jos144/jos144.component'
import Jos145 from '../screens/App/OldBooks/Josue/Jos145/jos145.component'
import Jos146 from '../screens/App/OldBooks/Josue/Jos146/jos146.component'
import Jos147 from '../screens/App/OldBooks/Josue/Jos147/jos147.component'
import Jos148 from '../screens/App/OldBooks/Josue/Jos148/jos148.component'
import Jos149 from '../screens/App/OldBooks/Josue/Jos149/jos149.component'
import Jos150 from '../screens/App/OldBooks/Josue/Jos150/jos150.component'
import Jos151 from '../screens/App/OldBooks/Josue/Jos151/jos151.component'
import Jos152 from '../screens/App/OldBooks/Josue/Jos152/jos152.component'
import Jos153 from '../screens/App/OldBooks/Josue/Jos153/jos153.component'
import Jos154 from '../screens/App/OldBooks/Josue/Jos154/jos154.component'
import Jos155 from '../screens/App/OldBooks/Josue/Jos155/jos155.component'

import Juizes from '../screens/App/OldBooks/Juizes/juizes.component'
import Jz156 from '../screens/App/OldBooks/Juizes/Jz156/jz156.component'
import Jz157 from '../screens/App/OldBooks/Juizes/Jz157/jz157.component'
import Jz158 from '../screens/App/OldBooks/Juizes/Jz158/jz158.component'
import Jz159 from '../screens/App/OldBooks/Juizes/Jz159/jz159.component'
import Jz160 from '../screens/App/OldBooks/Juizes/Jz160/jz160.component'
import Jz161 from '../screens/App/OldBooks/Juizes/Jz161/jz161.component'
import Jz162 from '../screens/App/OldBooks/Juizes/Jz162/jz162.component'
import Jz163 from '../screens/App/OldBooks/Juizes/Jz163/jz163.component'
import Jz164 from '../screens/App/OldBooks/Juizes/Jz164/jz164.component'
import Jz165 from '../screens/App/OldBooks/Juizes/Jz165/jz165.component'
import Jz166 from '../screens/App/OldBooks/Juizes/Jz166/jz166.component'
import Jz167 from '../screens/App/OldBooks/Juizes/Jz167/jz167.component'

import Rute from '../screens/App/OldBooks/Rute/rute.component'
import Rut168 from '../screens/App/OldBooks/Rute/Rut168/rut168.component'
import Rut169 from '../screens/App/OldBooks/Rute/Rut169/rut169.component'
import Rut170 from '../screens/App/OldBooks/Rute/Rut170/rut170.component'
import Rut171 from '../screens/App/OldBooks/Rute/Rut171/rut171.component'

import PrimeiroSamuel from '../screens/App/OldBooks/PrimeiroSamuel/primeiro-samuel.component'
import PrimeiroSam172 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam172/primeiro-sam172.component'
import PrimeiroSam173 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam173/primeiro-sam173.component'
import PrimeiroSam174 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam174/primeiro-sam174.component'
import PrimeiroSam175 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam175/primeiro-sam175.component'
import PrimeiroSam176 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam176/primeiro-sam176.component'
import PrimeiroSam177 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam177/primeiro-sam177.component'
import PrimeiroSam178 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam178/primeiro-sam178.component'
import PrimeiroSam179 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam179/primeiro-sam179.component'
import PrimeiroSam180 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam180/primeiro-sam180.component'
import PrimeiroSam181 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam181/primeiro-sam181.component'
import PrimeiroSam182 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam182/primeiro-sam182.component'
import PrimeiroSam183 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam183/primeiro-sam183.component'
import PrimeiroSam184 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam184/primeiro-sam184.component'
import PrimeiroSam185 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam185/primeiro-sam185.component'
import PrimeiroSam186 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam186/primeiro-sam186.component'
import PrimeiroSam187 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam187/primeiro-sam187.component'
import PrimeiroSam188 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam188/primeiro-sam188.component'
import PrimeiroSam189 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam189/primeiro-sam189.component'
import PrimeiroSam190 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam190/primeiro-sam190.component'
import PrimeiroSam191 from '../screens/App/OldBooks/PrimeiroSamuel/PrimeiroSam191/primeiro-sam191.component'

import SegundoSamuel from '../screens/App/OldBooks/SegundoSamuel/segundo-samuel.component'
import SegundoSam192 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam192/segundo-sam192.component'
import SegundoSam193 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam193/segundo-sam193.component'
import SegundoSam194 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam194/segundo-sam194.component'
import SegundoSam195 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam195/segundo-sam195.component'
import SegundoSam196 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam196/segundo-sam196.component'
import SegundoSam197 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam197/segundo-sam197.component'
import SegundoSam198 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam198/segundo-sam198.component'
import SegundoSam199 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam199/segundo-sam199.component'
import SegundoSam200 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam200/segundo-sam200.component'
import SegundoSam201 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam201/segundo-sam201.component'
import SegundoSam202 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam202/segundo-sam202.component'
import SegundoSam203 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam203/segundo-sam203.component'
import SegundoSam204 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam204/segundo-sam204.component'
import SegundoSam205 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam205/segundo-sam205.component'
import SegundoSam206 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam206/segundo-sam206.component'
import SegundoSam207 from '../screens/App/OldBooks/SegundoSamuel/SegundoSam207/segundo-sam207.component'

import Salmos from '../screens/App/OldBooks/Salmos/salmos.component'
import Sl208 from '../screens/App/OldBooks/Salmos/Sl208/sl208.component'
import Sl209 from '../screens/App/OldBooks/Salmos/Sl209/sl209.component'
import Sl210 from '../screens/App/OldBooks/Salmos/Sl210/sl210.component'
import Sl211 from '../screens/App/OldBooks/Salmos/Sl211/sl211.component'
import Sl212 from '../screens/App/OldBooks/Salmos/Sl212/sl212.component'
import Sl213 from '../screens/App/OldBooks/Salmos/Sl213/sl213.component'
import Sl214 from '../screens/App/OldBooks/Salmos/Sl214/sl214.component'
import Sl215 from '../screens/App/OldBooks/Salmos/Sl215/sl215.component'
import Sl216 from '../screens/App/OldBooks/Salmos/Sl216/sl216.component'
import Sl217 from '../screens/App/OldBooks/Salmos/Sl217/sl217.component'
import Sl218 from '../screens/App/OldBooks/Salmos/Sl218/sl218.component'
import Sl219 from '../screens/App/OldBooks/Salmos/Sl219/sl219.component'
import Sl220 from '../screens/App/OldBooks/Salmos/Sl220/sl220.component'
import Sl221 from '../screens/App/OldBooks/Salmos/Sl221/sl221.component'
import Sl222 from '../screens/App/OldBooks/Salmos/Sl222/sl222.component'
import Sl223 from '../screens/App/OldBooks/Salmos/Sl223/sl223.component'
import Sl224 from '../screens/App/OldBooks/Salmos/Sl224/sl224.component'
import Sl225 from '../screens/App/OldBooks/Salmos/Sl225/sl225.component'
import Sl226 from '../screens/App/OldBooks/Salmos/Sl226/sl226.component'
import Sl227 from '../screens/App/OldBooks/Salmos/Sl227/sl227.component'
import Sl228 from '../screens/App/OldBooks/Salmos/Sl228/sl228.component'
import Sl229 from '../screens/App/OldBooks/Salmos/Sl229/sl229.component'
import Sl230 from '../screens/App/OldBooks/Salmos/Sl230/sl230.component'
import Sl231 from '../screens/App/OldBooks/Salmos/Sl231/sl231.component'
import Sl232 from '../screens/App/OldBooks/Salmos/Sl232/sl232.component'
import Sl233 from '../screens/App/OldBooks/Salmos/Sl233/sl233.component'
import Sl234 from '../screens/App/OldBooks/Salmos/Sl234/sl234.component'
import Sl235 from '../screens/App/OldBooks/Salmos/Sl235/sl235.component'
import Sl236 from '../screens/App/OldBooks/Salmos/Sl236/sl236.component'
import Sl237 from '../screens/App/OldBooks/Salmos/Sl237/sl237.component'
import Sl238 from '../screens/App/OldBooks/Salmos/Sl238/sl238.component'
import Sl239 from '../screens/App/OldBooks/Salmos/Sl239/sl239.component'
import Sl240 from '../screens/App/OldBooks/Salmos/Sl240/sl240.component'
import Sl241 from '../screens/App/OldBooks/Salmos/Sl241/sl241.component'
import Sl242 from '../screens/App/OldBooks/Salmos/Sl242/sl242.component'
import Sl243 from '../screens/App/OldBooks/Salmos/Sl243/sl243.component'
import Sl244 from '../screens/App/OldBooks/Salmos/Sl244/sl244.component'
import Sl245 from '../screens/App/OldBooks/Salmos/Sl245/sl245.component'
import Sl246 from '../screens/App/OldBooks/Salmos/Sl246/sl246.component'
import Sl247 from '../screens/App/OldBooks/Salmos/Sl247/sl247.component'
import Sl248 from '../screens/App/OldBooks/Salmos/Sl248/sl248.component'
import Sl249 from '../screens/App/OldBooks/Salmos/Sl249/sl249.component'
import Sl250 from '../screens/App/OldBooks/Salmos/Sl250/sl250.component'
import Sl251 from '../screens/App/OldBooks/Salmos/Sl251/sl251.component'
import Sl252 from '../screens/App/OldBooks/Salmos/Sl252/sl252.component'
import Sl253 from '../screens/App/OldBooks/Salmos/Sl253/sl253.component'
import Sl254 from '../screens/App/OldBooks/Salmos/Sl254/sl254.component'
import Sl255 from '../screens/App/OldBooks/Salmos/Sl255/sl255.component'
import Sl256 from '../screens/App/OldBooks/Salmos/Sl256/sl256.component'
import Sl257 from '../screens/App/OldBooks/Salmos/Sl257/sl257.component'
import Sl258 from '../screens/App/OldBooks/Salmos/Sl258/sl258.component'
import Sl259 from '../screens/App/OldBooks/Salmos/Sl259/sl259.component'
import Sl260 from '../screens/App/OldBooks/Salmos/Sl260/sl260.component'
import Sl261 from '../screens/App/OldBooks/Salmos/Sl261/sl261.component'
import Sl262 from '../screens/App/OldBooks/Salmos/Sl262/sl262.component'
import Sl263 from '../screens/App/OldBooks/Salmos/Sl263/sl263.component'
import Sl264 from '../screens/App/OldBooks/Salmos/Sl264/sl264.component'
import Sl265 from '../screens/App/OldBooks/Salmos/Sl265/sl265.component'
import Sl266 from '../screens/App/OldBooks/Salmos/Sl266/sl266.component'

import PrimeiroReis from '../screens/App/OldBooks/PrimeiroReis/primeiro-reis.component'
import PrimeiroRe267 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe267/primeiro-re267.component'
import PrimeiroRe268 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe268/primeiro-re268.component'
import PrimeiroRe269 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe269/primeiro-re269.component'
import PrimeiroRe270 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe270/primeiro-re270.component'
import PrimeiroRe271 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe271/primeiro-re271.component'
import PrimeiroRe272 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe272/primeiro-re272.component'
import PrimeiroRe273 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe273/primeiro-re273.component'
import PrimeiroRe274 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe274/primeiro-re274.component'
import PrimeiroRe275 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe275/primeiro-re275.component'
import PrimeiroRe276 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe276/primeiro-re276.component'
import PrimeiroRe277 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe277/primeiro-re277.component'
import PrimeiroRe278 from '../screens/App/OldBooks/PrimeiroReis/PrimeiroRe278/primeiro-re278.component'

import SegundoReis from '../screens/App/OldBooks/SegundoReis/segundo-reis.component'
import SegundoRe279 from '../screens/App/OldBooks/SegundoReis/SegundoRe279/segundo-re279.component'
import SegundoRe280 from '../screens/App/OldBooks/SegundoReis/SegundoRe280/segundo-re280.component'
import SegundoRe281 from '../screens/App/OldBooks/SegundoReis/SegundoRe281/segundo-re281.component'
import SegundoRe282 from '../screens/App/OldBooks/SegundoReis/SegundoRe282/segundo-re282.component'
import SegundoRe283 from '../screens/App/OldBooks/SegundoReis/SegundoRe283/segundo-re283.component'
import SegundoRe284 from '../screens/App/OldBooks/SegundoReis/SegundoRe284/segundo-re284.component'
import SegundoRe285 from '../screens/App/OldBooks/SegundoReis/SegundoRe285/segundo-re285.component'
import SegundoRe286 from '../screens/App/OldBooks/SegundoReis/SegundoRe286/segundo-re286.component'
import SegundoRe287 from '../screens/App/OldBooks/SegundoReis/SegundoRe287/segundo-re287.component'
import SegundoRe288 from '../screens/App/OldBooks/SegundoReis/SegundoRe288/segundo-re288.component'

import Jo from '../screens/App/OldBooks/Jo/jo.component'
import Jo289 from '../screens/App/OldBooks/Jo/Jo289/jo289.component'
import Jo290 from '../screens/App/OldBooks/Jo/Jo290/jo290.component'
import Jo291 from '../screens/App/OldBooks/Jo/Jo291/jo291.component'
import Jo292 from '../screens/App/OldBooks/Jo/Jo292/jo292.component'
import Jo293 from '../screens/App/OldBooks/Jo/Jo293/jo293.component'
import Jo294 from '../screens/App/OldBooks/Jo/Jo294/jo294.component'
import Jo295 from '../screens/App/OldBooks/Jo/Jo295/jo295.component'
import Jo296 from '../screens/App/OldBooks/Jo/Jo296/jo296.component'
import Jo297 from '../screens/App/OldBooks/Jo/Jo297/jo297.component'
import Jo298 from '../screens/App/OldBooks/Jo/Jo298/jo298.component'
import Jo299 from '../screens/App/OldBooks/Jo/Jo299/jo299.component'

import Proverbios from '../screens/App/OldBooks/Proverbios/proverbios.component'
import Pv300 from '../screens/App/OldBooks/Proverbios/Pv300/pv300.component'
import Pv301 from '../screens/App/OldBooks/Proverbios/Pv301/pv301.component'
import Pv302 from '../screens/App/OldBooks/Proverbios/Pv302/pv302.component'
import Pv303 from '../screens/App/OldBooks/Proverbios/Pv303/pv303.component'
import Pv304 from '../screens/App/OldBooks/Proverbios/Pv304/pv304.component'
import Pv305 from '../screens/App/OldBooks/Proverbios/Pv305/pv305.component'
import Pv306 from '../screens/App/OldBooks/Proverbios/Pv306/pv306.component'
import Pv307 from '../screens/App/OldBooks/Proverbios/Pv307/pv307.component'
import Pv308 from '../screens/App/OldBooks/Proverbios/Pv308/pv308.component'
import Pv309 from '../screens/App/OldBooks/Proverbios/Pv309/pv309.component'
import Pv310 from '../screens/App/OldBooks/Proverbios/Pv310/pv310.component'
import Pv311 from '../screens/App/OldBooks/Proverbios/Pv311/pv311.component'
import Pv312 from '../screens/App/OldBooks/Proverbios/Pv312/pv312.component'

import Eclesiastes from '../screens/App/OldBooks/Eclesiastes/eclesiastes.component'
import Ec313 from '../screens/App/OldBooks/Eclesiastes/Ec313/ec313.component'
import Ec314 from '../screens/App/OldBooks/Eclesiastes/Ec314/ec314.component'
import Ec315 from '../screens/App/OldBooks/Eclesiastes/Ec315/ec315.component'
import Ec316 from '../screens/App/OldBooks/Eclesiastes/Ec316/ec316.component'
import Ec317 from '../screens/App/OldBooks/Eclesiastes/Ec317/ec317.component'
import Ec318 from '../screens/App/OldBooks/Eclesiastes/Ec318/ec318.component'

import Cantares from '../screens/App/OldBooks/Cantares/cantares.component'
import Ct319 from '../screens/App/OldBooks/Cantares/Ct319/ct319.component'
import Ct320 from '../screens/App/OldBooks/Cantares/Ct320/ct320.component'

import PrimeiroCronicas from '../screens/App/OldBooks/PrimeiroCronicas/primeiro-cronicas.component'
import PrimeiroCr321 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr321/primeiro-cr321.component'
import PrimeiroCr322 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr322/primeiro-cr322.component'
import PrimeiroCr323 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr323/primeiro-cr323.component'
import PrimeiroCr324 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr324/primeiro-cr324.component'
import PrimeiroCr325 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr325/primeiro-cr325.component'
import PrimeiroCr326 from '../screens/App/OldBooks/PrimeiroCronicas/PrimeiroCr326/primeiro-cr326.component'

import Amos from '../screens/App/OldBooks/Amos/amos.component'
import Am335 from '../screens/App/OldBooks/Amos/Am335/am335.component'
import Am336 from '../screens/App/OldBooks/Amos/Am336/am336.component'
import Am337 from '../screens/App/OldBooks/Amos/Am337/am337.component'

import SegundoCronicas from '../screens/App/OldBooks/SegundoCronicas/segundo-cronicas.component'
import SegundoCr327 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr327/segundo-cr327.component'
import SegundoCr328 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr328/segundo-cr328.component'
import SegundoCr329 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr329/segundo-cr329.component'
import SegundoCr330 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr330/segundo-cr330.component'
import SegundoCr331 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr331/segundo-cr331.component'
import SegundoCr332 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr332/segundo-cr332.component'
import SegundoCr333 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr333/segundo-cr333.component'
import SegundoCr334 from '../screens/App/OldBooks/SegundoCronicas/SegundoCr334/segundo-cr334.component'

import Obadias from '../screens/App/NewBooks/Obadias/obadias.component'
import Oba338 from '../screens/App/NewBooks/Obadias/Oba338/oba338.component'


import Oseias from '../screens/App/OldBooks/Oseias/oseias.component'
import Ose339 from '../screens/App/OldBooks/Oseias/Ose339/ose339.component'
import Ose340 from '../screens/App/OldBooks/Oseias/Ose340/ose340.component'
import Ose341 from '../screens/App/OldBooks/Oseias/Ose341/ose341.component'
import Ose342 from '../screens/App/OldBooks/Oseias/Ose342/ose342.component'

import Joel from '../screens/App/OldBooks/Joel/joel.component'
import Jl343 from '../screens/App/OldBooks/Joel/Jl343/jl343.component'

import Jonas from '../screens/App/OldBooks/Jonas/jonas.component'
import Jn344 from '../screens/App/OldBooks/Jonas/Jn344/jn344.component'
import Jn345 from '../screens/App/OldBooks/Jonas/Jn345/jn345.component'

import Miqueias from '../screens/App/OldBooks/Miqueias/miqueias.component'
import Miq346 from '../screens/App/OldBooks/Miqueias/Miq346/miq346.component'
import Miq347 from '../screens/App/OldBooks/Miqueias/Miq347/miq347.component'


import Isaias from '../screens/App/OldBooks/Isaias/isaias.component'
import Isa348 from '../screens/App/OldBooks/Isaias/Isa348/isa348.component'
import Isa349 from '../screens/App/OldBooks/Isaias/Isa349/isa349.component'
import Isa350 from '../screens/App/OldBooks/Isaias/Isa350/isa350.component'
import Isa351 from '../screens/App/OldBooks/Isaias/Isa351/isa351.component'
import Isa352 from '../screens/App/OldBooks/Isaias/Isa352/isa352.component'
import Isa353 from '../screens/App/OldBooks/Isaias/Isa353/isa353.component'
import Isa354 from '../screens/App/OldBooks/Isaias/Isa354/isa354.component'
import Isa355 from '../screens/App/OldBooks/Isaias/Isa355/isa355.component'
import Isa356 from '../screens/App/OldBooks/Isaias/Isa356/isa356.component'
import Isa357 from '../screens/App/OldBooks/Isaias/Isa357/isa357.component'
import Isa358 from '../screens/App/OldBooks/Isaias/Isa358/isa358.component'
import Isa359 from '../screens/App/OldBooks/Isaias/Isa359/isa359.component'
import Isa360 from '../screens/App/OldBooks/Isaias/Isa360/isa360.component'
import Isa361 from '../screens/App/OldBooks/Isaias/Isa361/isa361.component'
import Isa362 from '../screens/App/OldBooks/Isaias/Isa362/isa362.component'
import Isa363 from '../screens/App/OldBooks/Isaias/Isa363/isa363.component'
import Isa364 from '../screens/App/OldBooks/Isaias/Isa364/isa364.component'
import Isa365 from '../screens/App/OldBooks/Isaias/Isa365/isa365.component'

import Naum from '../screens/App/OldBooks/Naum/naum.component'
import Na366 from '../screens/App/OldBooks/Naum/Na366/na366.component'


import  Habacuque  from '../screens/App/OldBooks/Habacuque/habacuque.component'
import Hab367 from '../screens/App/OldBooks/Habacuque/Hab367/hab367.component'
import Hab368 from '../screens/App/OldBooks/Habacuque/Hab368/hab368.component'

import Sofonias from '../screens/App/NewBooks/Sofonias/sofonias.component'
import Sof369 from '../screens/App/NewBooks/Sofonias/Sof369/sof369.component'

export const StackAuth = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="CreateProfile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="NewBooks" component={NewBooks} />
      <Stack.Screen name="OldBooks" component={OldBooks} />
      <Stack.Screen name="Genesis" component={Genesis} />
      <Stack.Screen name="Gn1" component={Gn1} />
      <Stack.Screen name="Gn2" component={Gn2} />
      <Stack.Screen name="Gn3" component={Gn3} />
      <Stack.Screen name="Gn4" component={Gn4} />
      <Stack.Screen name="Gn5" component={Gn5} />
      <Stack.Screen name="Gn6" component={Gn6} />
      <Stack.Screen name="Gn7" component={Gn7} />
      <Stack.Screen name="Gn8" component={Gn8} />
      <Stack.Screen name="Gn9" component={Gn9} />
      <Stack.Screen name="Gn10" component={Gn10} />
      <Stack.Screen name="Gn11" component={Gn11} />
      <Stack.Screen name="Gn12" component={Gn12} />
      <Stack.Screen name="Gn13" component={Gn13} />
      <Stack.Screen name="Gn14" component={Gn14} />
      <Stack.Screen name="Gn15" component={Gn15} />
      <Stack.Screen name="Gn16" component={Gn16} />
      <Stack.Screen name="Gn17" component={Gn17} />
      <Stack.Screen name="Gn18" component={Gn18} />
      <Stack.Screen name="Gn19" component={Gn19} />
      <Stack.Screen name="Gn20" component={Gn20} />
      <Stack.Screen name="Gn21" component={Gn21} />
      <Stack.Screen name="Gn22" component={Gn22} />
      <Stack.Screen name="Gn23" component={Gn23} />
      <Stack.Screen name="Gn24" component={Gn24} />
      <Stack.Screen name="Gn25" component={Gn25} />
      <Stack.Screen name="Gn26" component={Gn26} />
      <Stack.Screen name="Gn27" component={Gn27} />
      <Stack.Screen name="Gn28" component={Gn28} />
      <Stack.Screen name="Gn29" component={Gn29} />
      <Stack.Screen name="Gn30" component={Gn30} />
      <Stack.Screen name="Gn31" component={Gn31} />
      <Stack.Screen name="Gn32" component={Gn32} />
      <Stack.Screen name="Gn33" component={Gn33} />
      <Stack.Screen name="Gn34" component={Gn34} />
      <Stack.Screen name="Gn35" component={Gn35} />
      <Stack.Screen name="Gn36" component={Gn36} />
      <Stack.Screen name="Gn37" component={Gn37} />
      <Stack.Screen name="Gn38" component={Gn38} />
      <Stack.Screen name="Gn39" component={Gn39} />
      <Stack.Screen name="Gn40" component={Gn40} />
      <Stack.Screen name="Gn41" component={Gn41} />
      <Stack.Screen name="Gn42" component={Gn42} />
      <Stack.Screen name="PlayerAudio" component={PlayerAudio} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Credits" component={Credits} />
      <Stack.Screen name="UpdateName" component={UpdateName} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmail} />
      <Stack.Screen name="Themes" component={Themes} />

      <Stack.Screen name="Exodo" component={Exodo} />
      <Stack.Screen name="Ex43" component={Ex43} />
      <Stack.Screen name="Ex44" component={Ex44} />
      <Stack.Screen name="Ex45" component={Ex45} />
      <Stack.Screen name="Ex46" component={Ex46} />
      <Stack.Screen name="Ex47" component={Ex47} />
      <Stack.Screen name="Ex48" component={Ex48} />
      <Stack.Screen name="Ex49" component={Ex49} />
      <Stack.Screen name="Ex50" component={Ex50} />
      <Stack.Screen name="Ex51" component={Ex51} />
      <Stack.Screen name="Ex52" component={Ex52} />
      <Stack.Screen name="Ex53" component={Ex53} />
      <Stack.Screen name="Ex54" component={Ex54} />
      <Stack.Screen name="Ex55" component={Ex55} />
      <Stack.Screen name="Ex56" component={Ex56} />
      <Stack.Screen name="Ex57" component={Ex57} />
      <Stack.Screen name="Ex58" component={Ex58} />
      <Stack.Screen name="Ex59" component={Ex59} />
      <Stack.Screen name="Ex60" component={Ex60} />

      <Stack.Screen name="Romanos" component={Romanos} />
      <Stack.Screen name="Rom61" component={Rom61} />
      <Stack.Screen name="Rom62" component={Rom62} />
      <Stack.Screen name="Rom63" component={Rom63} />
      <Stack.Screen name="Rom64" component={Rom64} />
      <Stack.Screen name="Rom65" component={Rom65} />
      <Stack.Screen name="Rom66" component={Rom66} />
      <Stack.Screen name="Rom67" component={Rom67} />
      <Stack.Screen name="Rom68" component={Rom68} />
      <Stack.Screen name="Rom69" component={Rom69} />
      <Stack.Screen name="Rom70" component={Rom70} />
      <Stack.Screen name="Rom71" component={Rom71} />
      <Stack.Screen name="Rom72" component={Rom72} />
      <Stack.Screen name="Rom73" component={Rom73} />
      <Stack.Screen name="Rom74" component={Rom74} />

      <Stack.Screen name="Levitico" component={Levitico} />
      <Stack.Screen name="Lv75" component={Lv75} />
      <Stack.Screen name="Lv76" component={Lv76} />
      <Stack.Screen name="Lv77" component={Lv77} />
      <Stack.Screen name="Lv78" component={Lv78} />
      <Stack.Screen name="Lv79" component={Lv79} />
      <Stack.Screen name="Lv80" component={Lv80} />
      <Stack.Screen name="Lv81" component={Lv81} />
      <Stack.Screen name="Lv82" component={Lv82} />
      <Stack.Screen name="Lv83" component={Lv83} />
      <Stack.Screen name="Lv84" component={Lv84} />
      <Stack.Screen name="Lv85" component={Lv85} />
      <Stack.Screen name="Lv86" component={Lv86} />

      <Stack.Screen name="Hebreus" component={Hebreus} />
      <Stack.Screen name="Hb87" component={Hb87} />
      <Stack.Screen name="Hb88" component={Hb88} />
      <Stack.Screen name="Hb89" component={Hb89} />
      <Stack.Screen name="Hb90" component={Hb90} />
      <Stack.Screen name="Hb91" component={Hb91} />
      <Stack.Screen name="Hb92" component={Hb92} />
      <Stack.Screen name="Hb93" component={Hb93} />
      <Stack.Screen name="Hb94" component={Hb94} />
      <Stack.Screen name="Hb95" component={Hb95} />
      <Stack.Screen name="Hb96" component={Hb96} />
      <Stack.Screen name="Hb97" component={Hb97} />
      <Stack.Screen name="Hb98" component={Hb98} />

      <Stack.Screen name="Numeros" component={Numeros} />
      <Stack.Screen name="Num99" component={Num99} />
      <Stack.Screen name="Num100" component={Num100} />
      <Stack.Screen name="Num101" component={Num101} />
      <Stack.Screen name="Num102" component={Num102} />
      <Stack.Screen name="Num103" component={Num103} />
      <Stack.Screen name="Num104" component={Num104} />
      <Stack.Screen name="Num105" component={Num105} />
      <Stack.Screen name="Num106" component={Num106} />
      <Stack.Screen name="Num107" component={Num107} />
      <Stack.Screen name="Num108" component={Num108} />
      <Stack.Screen name="Num109" component={Num109} />
      <Stack.Screen name="Num110" component={Num110} />
      <Stack.Screen name="Num111" component={Num111} />
      <Stack.Screen name="Num112" component={Num112} />
      <Stack.Screen name="Num113" component={Num113} />
      <Stack.Screen name="Num114" component={Num114} />

      <Stack.Screen name="Galatas" component={Galatas} />
      <Stack.Screen name="Gl115" component={Gl115} />
      <Stack.Screen name="Gl116" component={Gl116} />
      <Stack.Screen name="Gl117" component={Gl117} />
      <Stack.Screen name="Gl118" component={Gl118} />
      <Stack.Screen name="Gl119" component={Gl119} />
      <Stack.Screen name="Gl120" component={Gl120} />

      <Stack.Screen name="Deuteronomio" component={Deuteronomio} />
      <Stack.Screen name="Deut121" component={Deut121} />
      <Stack.Screen name="Deut122" component={Deut122} />
      <Stack.Screen name="Deut123" component={Deut123} />
      <Stack.Screen name="Deut124" component={Deut124} />
      <Stack.Screen name="Deut125" component={Deut125} />
      <Stack.Screen name="Deut126" component={Deut126} />
      <Stack.Screen name="Deut127" component={Deut127} />
      <Stack.Screen name="Deut128" component={Deut128} />
      <Stack.Screen name="Deut129" component={Deut129} />
      <Stack.Screen name="Deut130" component={Deut130} />
      <Stack.Screen name="Deut131" component={Deut131} />
      <Stack.Screen name="Deut132" component={Deut132} />
      <Stack.Screen name="Deut133" component={Deut133} />
      <Stack.Screen name="Deut134" component={Deut134} />
      <Stack.Screen name="Deut135" component={Deut135} />
      <Stack.Screen name="Deut136" component={Deut136} />
      <Stack.Screen name="Deut137" component={Deut137} />
      <Stack.Screen name="Deut138" component={Deut138} />
      <Stack.Screen name="Deut139" component={Deut139} />

      <Stack.Screen name="Tiago" component={Tiago} />
      <Stack.Screen name="Tg140" component={Tg140} />
      <Stack.Screen name="Tg141" component={Tg141} />
      <Stack.Screen name="Tg142" component={Tg142} />
      <Stack.Screen name="Tg143" component={Tg143} />

      <Stack.Screen name="Josue" component={Josue} />
      <Stack.Screen name="Jos144" component={Jos144} />
      <Stack.Screen name="Jos145" component={Jos145} />
      <Stack.Screen name="Jos146" component={Jos146} />
      <Stack.Screen name="Jos147" component={Jos147} />
      <Stack.Screen name="Jos148" component={Jos148} />
      <Stack.Screen name="Jos149" component={Jos149} />
      <Stack.Screen name="Jos150" component={Jos150} />
      <Stack.Screen name="Jos151" component={Jos151} />
      <Stack.Screen name="Jos152" component={Jos152} />
      <Stack.Screen name="Jos153" component={Jos153} />
      <Stack.Screen name="Jos154" component={Jos154} />
      <Stack.Screen name="Jos155" component={Jos155} />

      <Stack.Screen name="Juizes" component={Juizes} />
      <Stack.Screen name="Jz156" component={Jz156} />
      <Stack.Screen name="Jz157" component={Jz157} />
      <Stack.Screen name="Jz158" component={Jz158} />
      <Stack.Screen name="Jz159" component={Jz159} />
      <Stack.Screen name="Jz160" component={Jz160} />
      <Stack.Screen name="Jz161" component={Jz161} />
      <Stack.Screen name="Jz162" component={Jz162} />
      <Stack.Screen name="Jz163" component={Jz163} />
      <Stack.Screen name="Jz164" component={Jz164} />
      <Stack.Screen name="Jz165" component={Jz165} />
      <Stack.Screen name="Jz166" component={Jz166} />
      <Stack.Screen name="Jz167" component={Jz167} />

      <Stack.Screen name="Rute" component={Rute} />
      <Stack.Screen name="Rut168" component={Rut168} />
      <Stack.Screen name="Rut169" component={Rut169} />
      <Stack.Screen name="Rut170" component={Rut170} />
      <Stack.Screen name="Rut171" component={Rut171} />

      <Stack.Screen name="Primeiro Samuel" component={PrimeiroSamuel} />
      <Stack.Screen name="PrimeiroSam172" component={PrimeiroSam172} />
      <Stack.Screen name="PrimeiroSam173" component={PrimeiroSam173} />
      <Stack.Screen name="PrimeiroSam174" component={PrimeiroSam174} />
      <Stack.Screen name="PrimeiroSam175" component={PrimeiroSam175} />
      <Stack.Screen name="PrimeiroSam176" component={PrimeiroSam176} />
      <Stack.Screen name="PrimeiroSam177" component={PrimeiroSam177} />
      <Stack.Screen name="PrimeiroSam178" component={PrimeiroSam178} />
      <Stack.Screen name="PrimeiroSam179" component={PrimeiroSam179} />
      <Stack.Screen name="PrimeiroSam180" component={PrimeiroSam180} />
      <Stack.Screen name="PrimeiroSam181" component={PrimeiroSam181} />
      <Stack.Screen name="PrimeiroSam182" component={PrimeiroSam182} />
      <Stack.Screen name="PrimeiroSam183" component={PrimeiroSam183} />
      <Stack.Screen name="PrimeiroSam184" component={PrimeiroSam184} />
      <Stack.Screen name="PrimeiroSam185" component={PrimeiroSam185} />
      <Stack.Screen name="PrimeiroSam186" component={PrimeiroSam186} />
      <Stack.Screen name="PrimeiroSam187" component={PrimeiroSam187} />
      <Stack.Screen name="PrimeiroSam188" component={PrimeiroSam188} />
      <Stack.Screen name="PrimeiroSam189" component={PrimeiroSam189} />
      <Stack.Screen name="PrimeiroSam190" component={PrimeiroSam190} />
      <Stack.Screen name="PrimeiroSam191" component={PrimeiroSam191} />

      <Stack.Screen name="Segundo Samuel" component={SegundoSamuel} />
      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />

      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />
      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />
      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />
      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />
      <Stack.Screen name="SegundoSam192" component={SegundoSam192} />
      <Stack.Screen name="SegundoSam193" component={SegundoSam193} />
      <Stack.Screen name="SegundoSam194" component={SegundoSam194} />
      <Stack.Screen name="SegundoSam195" component={SegundoSam195} />
      <Stack.Screen name="SegundoSam196" component={SegundoSam196} />
      <Stack.Screen name="SegundoSam197" component={SegundoSam197} />
      <Stack.Screen name="SegundoSam198" component={SegundoSam198} />
      <Stack.Screen name="SegundoSam199" component={SegundoSam199} />
      <Stack.Screen name="SegundoSam200" component={SegundoSam200} />
      <Stack.Screen name="SegundoSam201" component={SegundoSam201} />
      <Stack.Screen name="SegundoSam202" component={SegundoSam202} />
      <Stack.Screen name="SegundoSam203" component={SegundoSam203} />
      <Stack.Screen name="SegundoSam204" component={SegundoSam204} />
      <Stack.Screen name="SegundoSam205" component={SegundoSam205} />
      <Stack.Screen name="SegundoSam206" component={SegundoSam206} />
      <Stack.Screen name="SegundoSam207" component={SegundoSam207} />

      <Stack.Screen name="Salmos" component={Salmos} />
      <Stack.Screen name="Sl208" component={Sl208} />
      <Stack.Screen name="Sl209" component={Sl209} />
      <Stack.Screen name="Sl210" component={Sl210} />
      <Stack.Screen name="Sl211" component={Sl211} />
      <Stack.Screen name="Sl212" component={Sl212} />
      <Stack.Screen name="Sl213" component={Sl213} />
      <Stack.Screen name="Sl214" component={Sl214} />
      <Stack.Screen name="Sl215" component={Sl215} />
      <Stack.Screen name="Sl216" component={Sl216} />
      <Stack.Screen name="Sl217" component={Sl217} />
      <Stack.Screen name="Sl218" component={Sl218} />
      <Stack.Screen name="Sl219" component={Sl219} />
      <Stack.Screen name="Sl220" component={Sl220} />
      <Stack.Screen name="Sl221" component={Sl221} />
      <Stack.Screen name="Sl222" component={Sl222} />
      <Stack.Screen name="Sl223" component={Sl223} />
      <Stack.Screen name="Sl224" component={Sl224} />
      <Stack.Screen name="Sl225" component={Sl225} />
      <Stack.Screen name="Sl226" component={Sl226} />
      <Stack.Screen name="Sl227" component={Sl227} />
      <Stack.Screen name="Sl228" component={Sl228} />
      <Stack.Screen name="Sl229" component={Sl229} />
      <Stack.Screen name="Sl230" component={Sl230} />
      <Stack.Screen name="Sl231" component={Sl231} />
      <Stack.Screen name="Sl232" component={Sl232} />
      <Stack.Screen name="Sl233" component={Sl233} />
      <Stack.Screen name="Sl234" component={Sl234} />
      <Stack.Screen name="Sl235" component={Sl235} />
      <Stack.Screen name="Sl236" component={Sl236} />
      <Stack.Screen name="Sl237" component={Sl237} />
      <Stack.Screen name="Sl238" component={Sl238} />
      <Stack.Screen name="Sl239" component={Sl239} />
      <Stack.Screen name="Sl240" component={Sl240} />
      <Stack.Screen name="Sl241" component={Sl241} />
      <Stack.Screen name="Sl242" component={Sl242} />
      <Stack.Screen name="Sl243" component={Sl243} />
      <Stack.Screen name="Sl244" component={Sl244} />
      <Stack.Screen name="Sl245" component={Sl245} />
      <Stack.Screen name="Sl246" component={Sl246} />
      <Stack.Screen name="Sl247" component={Sl247} />
      <Stack.Screen name="Sl248" component={Sl248} />
      <Stack.Screen name="Sl249" component={Sl249} />
      <Stack.Screen name="Sl250" component={Sl250} />
      <Stack.Screen name="Sl251" component={Sl251} />
      <Stack.Screen name="Sl252" component={Sl252} />
      <Stack.Screen name="Sl253" component={Sl253} />
      <Stack.Screen name="Sl254" component={Sl254} />
      <Stack.Screen name="Sl255" component={Sl255} />
      <Stack.Screen name="Sl256" component={Sl256} />
      <Stack.Screen name="Sl257" component={Sl257} />
      <Stack.Screen name="Sl258" component={Sl258} />
      <Stack.Screen name="Sl259" component={Sl259} />
      <Stack.Screen name="Sl260" component={Sl260} />
      <Stack.Screen name="Sl261" component={Sl261} />
      <Stack.Screen name="Sl262" component={Sl262} />
      <Stack.Screen name="Sl263" component={Sl263} />
      <Stack.Screen name="Sl264" component={Sl264} />
      <Stack.Screen name="Sl265" component={Sl265} />
      <Stack.Screen name="Sl266" component={Sl266} />

      <Stack.Screen name="Primeiro Reis" component={PrimeiroReis} />
      <Stack.Screen name="PrimeiroRe267" component={PrimeiroRe267} />
      <Stack.Screen name="PrimeiroRe268" component={PrimeiroRe268} />
      <Stack.Screen name="PrimeiroRe269" component={PrimeiroRe269} />
      <Stack.Screen name="PrimeiroRe270" component={PrimeiroRe270} />
      <Stack.Screen name="PrimeiroRe271" component={PrimeiroRe271} />
      <Stack.Screen name="PrimeiroRe272" component={PrimeiroRe272} />
      <Stack.Screen name="PrimeiroRe273" component={PrimeiroRe273} />
      <Stack.Screen name="PrimeiroRe274" component={PrimeiroRe274} />
      <Stack.Screen name="PrimeiroRe275" component={PrimeiroRe275} />
      <Stack.Screen name="PrimeiroRe276" component={PrimeiroRe276} />
      <Stack.Screen name="PrimeiroRe277" component={PrimeiroRe277} />
      <Stack.Screen name="PrimeiroRe278" component={PrimeiroRe278} />

      <Stack.Screen name="Segundo Reis" component={SegundoReis} />
      <Stack.Screen name="SegundoRe279" component={SegundoRe279} />
      <Stack.Screen name="SegundoRe280" component={SegundoRe280} />
      <Stack.Screen name="SegundoRe281" component={SegundoRe281} />
      <Stack.Screen name="SegundoRe282" component={SegundoRe282} />
      <Stack.Screen name="SegundoRe283" component={SegundoRe283} />
      <Stack.Screen name="SegundoRe284" component={SegundoRe284} />
      <Stack.Screen name="SegundoRe285" component={SegundoRe285} />
      <Stack.Screen name="SegundoRe286" component={SegundoRe286} />
      <Stack.Screen name="SegundoRe287" component={SegundoRe287} />
      <Stack.Screen name="SegundoRe288" component={SegundoRe288} />

      <Stack.Screen name="Jo" component={Jo} />
      <Stack.Screen name="Jo289" component={Jo289} />
      <Stack.Screen name="Jo290" component={Jo290} />
      <Stack.Screen name="Jo291" component={Jo291} />
      <Stack.Screen name="Jo292" component={Jo292} />
      <Stack.Screen name="Jo293" component={Jo293} />
      <Stack.Screen name="Jo294" component={Jo294} />
      <Stack.Screen name="Jo295" component={Jo295} />
      <Stack.Screen name="Jo296" component={Jo296} />
      <Stack.Screen name="Jo297" component={Jo297} />
      <Stack.Screen name="Jo298" component={Jo298} />
      <Stack.Screen name="Jo299" component={Jo299} />

      <Stack.Screen name="Proverbios" component={Proverbios} />
      <Stack.Screen name="Pv300" component={Pv300} />
      <Stack.Screen name="Pv301" component={Pv301} />
      <Stack.Screen name="Pv302" component={Pv302} />
      <Stack.Screen name="Pv303" component={Pv303} />
      <Stack.Screen name="Pv304" component={Pv304} />
      <Stack.Screen name="Pv305" component={Pv305} />
      <Stack.Screen name="Pv306" component={Pv306} />
      <Stack.Screen name="Pv307" component={Pv307} />
      <Stack.Screen name="Pv308" component={Pv308} />
      <Stack.Screen name="Pv309" component={Pv309} />
      <Stack.Screen name="Pv310" component={Pv310} />
      <Stack.Screen name="Pv311" component={Pv311} />
      <Stack.Screen name="Pv312" component={Pv312} />

      <Stack.Screen name="Eclesiastes" component={Eclesiastes} />
      <Stack.Screen name="Ec313" component={Ec313} />
      <Stack.Screen name="Ec314" component={Ec314} />
      <Stack.Screen name="Ec315" component={Ec315} />
      <Stack.Screen name="Ec316" component={Ec316} />
      <Stack.Screen name="Ec317" component={Ec317} />
      <Stack.Screen name="Ec318" component={Ec318} />

      <Stack.Screen name="Cantares" component={Cantares} />
      <Stack.Screen name="Ct319" component={Ct319} />
      <Stack.Screen name="Ct320" component={Ct320} />

      <Stack.Screen name="Primeiro Cronicas" component={PrimeiroCronicas} />
      <Stack.Screen name="PrimeiroCr321" component={PrimeiroCr321} />
      <Stack.Screen name="PrimeiroCr322" component={PrimeiroCr322} />
      <Stack.Screen name="PrimeiroCr323" component={PrimeiroCr323} />
      <Stack.Screen name="PrimeiroCr324" component={PrimeiroCr324} />
      <Stack.Screen name="PrimeiroCr325" component={PrimeiroCr325} />
      <Stack.Screen name="PrimeiroCr326" component={PrimeiroCr326} />

      <Stack.Screen name="Amos " component={Amos} />
      <Stack.Screen name="Am335" component={Am335} />
      <Stack.Screen name="Am336" component={Am336} />
      <Stack.Screen name="Am337" component={Am337} />

      <Stack.Screen name="Segundo Cronicas" component={SegundoCronicas} />
      <Stack.Screen name="SegundoCr327" component={SegundoCr327} />
      <Stack.Screen name="SegundoCr328" component={SegundoCr328} />
      <Stack.Screen name="SegundoCr329" component={SegundoCr329} />
      <Stack.Screen name="SegundoCr330" component={SegundoCr330} />
      <Stack.Screen name="SegundoCr331" component={SegundoCr331} />
      <Stack.Screen name="SegundoCr332" component={SegundoCr332} />
      <Stack.Screen name="SegundoCr333" component={SegundoCr333} />
      <Stack.Screen name="SegundoCr334" component={SegundoCr334} />

      <Stack.Screen name="Obadias" component={Obadias} />
      <Stack.Screen name="Oba338" component={Oba338} />

      <Stack.Screen name="Oseias" component={Oseias}/>
      <Stack.Screen name="Ose339" component={Ose339}/>
      <Stack.Screen name="Ose340" component={Ose340}/>
      <Stack.Screen name="Ose341" component={Ose341}/>
      <Stack.Screen name="Ose342" component={Ose342}/>

      <Stack.Screen name="Joel" component={Joel}/>
      <Stack.Screen name="Jl343" component={Jl343}/>

      <Stack.Screen name="Jonas" component={Jonas}/>
      <Stack.Screen name="Jn344" component={Jn344}/>
      <Stack.Screen name="Jn345" component={Jn345}/>

      <Stack.Screen name="Miqueias" component={Miqueias}/>
      <Stack.Screen name="Miq346" component={Miq346}/>
      <Stack.Screen name="Miq347" component={Miq347}/>

      <Stack.Screen name="Isaias" component={Isaias}/>
      <Stack.Screen name="Isa348" component={Isa348}/>
      <Stack.Screen name="Isa349" component={Isa349}/>
      <Stack.Screen name="Isa350" component={Isa350}/>
      <Stack.Screen name="Isa351" component={Isa351}/>
      <Stack.Screen name="Isa352" component={Isa352}/>
      <Stack.Screen name="Isa353" component={Isa353}/>
      <Stack.Screen name="Isa354" component={Isa354}/>
      <Stack.Screen name="Isa355" component={Isa355}/>
      <Stack.Screen name="Isa356" component={Isa356}/>
      <Stack.Screen name="Isa357" component={Isa357}/>
      <Stack.Screen name="Isa358" component={Isa358}/>
      <Stack.Screen name="Isa359" component={Isa359}/>
      <Stack.Screen name="Isa360" component={Isa360}/>
      <Stack.Screen name="Isa361" component={Isa361}/>
      <Stack.Screen name="Isa362" component={Isa362}/>
      <Stack.Screen name="Isa363" component={Isa363}/>
      <Stack.Screen name="Isa364" component={Isa364}/>
      <Stack.Screen name="Isa365" component={Isa365}/>

      <Stack.Screen name="Naum" component={Naum}/>
      <Stack.Screen name="Na366" component={Na366}/>


      <Stack.Screen name="Habacuque" component={Habacuque}/>
      <Stack.Screen name="Hab367" component={Hab367}/>
      <Stack.Screen name="Hab368" component={Hab368}/>

      <Stack.Screen name="Sofonias" component={Sofonias}/>
      <Stack.Screen name="Sof369" component={Sof369}/>

      {GroupAuth()}
    </Stack.Navigator>
  )
}
