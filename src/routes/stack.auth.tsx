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
import Ex43  from '../screens/App/OldBooks/Exodos/Ex43/ex43.component'
import Ex44  from '../screens/App/OldBooks/Exodos/Ex44/ex44.component'
import Ex45  from '../screens/App/OldBooks/Exodos/Ex45/ex45.component'
import Ex46  from '../screens/App/OldBooks/Exodos/Ex46/ex46.component'
import Ex47  from '../screens/App/OldBooks/Exodos/Ex47/ex47.component'
import Ex48  from '../screens/App/OldBooks/Exodos/Ex48/ex48.component'
import Ex49  from '../screens/App/OldBooks/Exodos/Ex49/ex49.component'
import Ex50  from '../screens/App/OldBooks/Exodos/Ex50/ex50.component'
import Ex51  from '../screens/App/OldBooks/Exodos/Ex51/ex51.component'
import Ex52  from '../screens/App/OldBooks/Exodos/Ex52/ex52.component'
import Ex53  from '../screens/App/OldBooks/Exodos/Ex53/ex53.component'
import Ex54  from '../screens/App/OldBooks/Exodos/Ex54/ex54.component'
import Ex55  from '../screens/App/OldBooks/Exodos/Ex55/ex55.component'
import Ex56  from '../screens/App/OldBooks/Exodos/Ex56/ex56.component'
import Ex57  from '../screens/App/OldBooks/Exodos/Ex57/ex57.component'
import Ex58  from '../screens/App/OldBooks/Exodos/Ex58/ex58.component'
import Ex59  from '../screens/App/OldBooks/Exodos/Ex59/ex59.component'
import Ex60  from '../screens/App/OldBooks/Exodos/Ex60/ex60.component'

import Romanos from '../screens/App/OldBooks/Romanos/romanos.component'
import  Rom61 from '../screens/App/OldBooks/Romanos/Rom61/rom61.component'
import  Rom62 from '../screens/App/OldBooks/Romanos/Rom62/rom62.component'
import  Rom63 from '../screens/App/OldBooks/Romanos/Rom63/rom63.component'
import  Rom64 from '../screens/App/OldBooks/Romanos/Rom64/rom64.component'
import  Rom65 from '../screens/App/OldBooks/Romanos/Rom65/rom65.component'
import  Rom66 from '../screens/App/OldBooks/Romanos/Rom66/rom66.component'
import  Rom67 from '../screens/App/OldBooks/Romanos/Rom67/rom67.component'
import  Rom68 from '../screens/App/OldBooks/Romanos/Rom68/rom68.component'
import  Rom69 from '../screens/App/OldBooks/Romanos/Rom69/rom69.component'
import  Rom70 from '../screens/App/OldBooks/Romanos/Rom70/rom70.component'
import  Rom71 from '../screens/App/OldBooks/Romanos/Rom71/rom71.component'
import  Rom72 from '../screens/App/OldBooks/Romanos/Rom72/rom72.component'
import  Rom73 from '../screens/App/OldBooks/Romanos/Rom73/rom73.component'
import  Rom74 from '../screens/App/OldBooks/Romanos/Rom74/rom74.component'

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

import Hebreus  from '../screens/App/OldBooks/Hebreus/hebreus.component'
import Hb87 from '../screens/App/OldBooks/Hebreus/Hb87/hb87.component'
import Hb88 from '../screens/App/OldBooks/Hebreus/Hb88/hb88.component'
import Hb89 from '../screens/App/OldBooks/Hebreus/Hb89/hb89.component'
import Hb90 from '../screens/App/OldBooks/Hebreus/Hb90/hb90.component'
import Hb91 from '../screens/App/OldBooks/Hebreus/Hb91/hb91.component'
import Hb92 from '../screens/App/OldBooks/Hebreus/Hb92/hb92.component'
import Hb93 from '../screens/App/OldBooks/Hebreus/Hb93/hb93.component'
import Hb94 from '../screens/App/OldBooks/Hebreus/Hb94/hb94.component'
import Hb95 from '../screens/App/OldBooks/Hebreus/Hb95/hb95.component'
import Hb96 from '../screens/App/OldBooks/Hebreus/Hb96/hb96.component'
import Hb97 from '../screens/App/OldBooks/Hebreus/Hb97/hb97.component'
import Hb98 from '../screens/App/OldBooks/Hebreus/Hb98/hb98.component'


import Numeros from '../screens/App/OldBooks/Numeros/numeros.component'
import Num99 from  '../screens/App/OldBooks/Numeros/Num99/num99.component'
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

import Galatas from '../screens/App/OldBooks/Galatas/galatas.component'
import Gl115 from '../screens/App/OldBooks/Galatas/Gl115/gl115.component'
import Gl116 from '../screens/App/OldBooks/Galatas/Gl116/gl116.component'
import Gl117 from '../screens/App/OldBooks/Galatas/Gl117/gl117.component'
import Gl118 from '../screens/App/OldBooks/Galatas/Gl118/gl118.component'
import Gl119 from '../screens/App/OldBooks/Galatas/Gl119/gl119.component'
import Gl120 from '../screens/App/OldBooks/Galatas/Gl120/gl120.component'


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

import Tiago from '../screens/App/OldBooks/Tiago/tiago.component'
import Tg140 from '../screens/App/OldBooks/Tiago/Tg140/tg140.component'
import Tg141 from '../screens/App/OldBooks/Tiago/Tg141/tg141.component'
import Tg142 from '../screens/App/OldBooks/Tiago/Tg142/tg142.component'
import Tg143 from '../screens/App/OldBooks/Tiago/Tg143/tg143.component'

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
      <Stack.Screen name="Rom" component={Rom61} />
      <Stack.Screen name="Rom" component={Rom62} />
      <Stack.Screen name="Rom" component={Rom63} />
      <Stack.Screen name="Rom" component={Rom64} />
      <Stack.Screen name="Rom" component={Rom65} />
      <Stack.Screen name="Rom" component={Rom66} />
      <Stack.Screen name="Rom" component={Rom67} />
      <Stack.Screen name="Rom" component={Rom68} />
      <Stack.Screen name="Rom" component={Rom69} />
      <Stack.Screen name="Rom" component={Rom70} />
      <Stack.Screen name="Rom" component={Rom71} />
      <Stack.Screen name="Rom" component={Rom72} />
      <Stack.Screen name="Rom" component={Rom73} />
      <Stack.Screen name="Rom" component={Rom74} />

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
     



          {GroupAuth()}
    </Stack.Navigator>
  )
}
