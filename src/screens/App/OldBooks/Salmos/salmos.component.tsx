import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './salmos.styles';
import * as T from './salmos.types';
import { ScrollView } from 'react-native'

const Salmos: React.FC<T.SalmosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Salmos'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Salmos')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Salmos')
      
      : [...parsedFavorites, 'Salmos'] 
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
    setIsFavorite(!isCurrentlyFavorite)
   setAnimationDuration(900)

  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // atualiza a duração da animação para 0 após o tempo especificado
      setAnimationDuration(0)
    }, animationDuration)

    // retorna uma função para limpar o timeout se o componente for desmontado antes da animação terminar
    return () => clearTimeout(timeoutId)
  }, [animationDuration])

  return (
    <>
      {animationDuration ? (
        <S.ContainerAnimationFavorite>
          <LottieView
            source={require('../../../../assets/ok.json')}
            autoPlay
            loop
            style={{ width: 500}}
            duration={animationDuration}
          />
        </S.ContainerAnimationFavorite>
      ) : (
        <LinearGradient
          colors={theme.colors.gradientBlueTwo}
          style={{
            flex: 1,
            paddingHorizontal: RFPercentage(2),
            paddingVertical: RFPercentage(3),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <S.Header>
            <S.TitleHeader>Salmos</S.TitleHeader>

            <S.ButtonFavorite onPress={() => handleFavoritePress()}>
              {isFavorite ? (
                <AntDesign
                  name="heart"
                  size={25}
                  color={theme.colors.blue100}
                />
              ) : (
                <Feather name="heart" size={25} color={theme.colors.blue100} />
              )}
            </S.ButtonFavorite>
          </S.Header>

            <ScrollView showsVerticalScrollIndicator={false}   contentContainerStyle={{ paddingBottom: 50 }}>
          <S.Container>
            <S.CardChapter onPress={() => navigator.navigate('Sl208')}>
              <S.Number>208</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl209')}>
              <S.Number>209</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl210')}>
              <S.Number>210</S.Number>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Sl211')}>
              <S.Number>211</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl212')}>
              <S.Number>212</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl213')}>
              <S.Number>213</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl214')}>
              <S.Number>214</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl215')}>
              <S.Number>215</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl216')}>
              <S.Number>216</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl217')}>
              <S.Number>217</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl218')}>
              <S.Number>218</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl219')}>
              <S.Number>219</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl220')}>
              <S.Number>220</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl221')}>
              <S.Number>221</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl222')}>
              <S.Number>222</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl223')}>
              <S.Number>223</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl224')}>
              <S.Number>224</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl225')}>
              <S.Number>225</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl226')}>
              <S.Number>226</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl227')}>
              <S.Number>227</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl228')}>
              <S.Number>228</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl229')}>
              <S.Number>229</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl230')}>
              <S.Number>230</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl231')}>
              <S.Number>231</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl232')}>
              <S.Number>232</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl233')}>
              <S.Number>233</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl234')}>
              <S.Number>234</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl235')}>
              <S.Number>235</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl236')}>
              <S.Number>236</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl237')}>
              <S.Number>237</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl238')}>
              <S.Number>238</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl239')}>
              <S.Number>239</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl240')}>
              <S.Number>240</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl241')}>
              <S.Number>241</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl242')}>
              <S.Number>242</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl243')}>
              <S.Number>243</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl244')}>
              <S.Number>244</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl245')}>
              <S.Number>245</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl246')}>
              <S.Number>246</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl247')}>
              <S.Number>247</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl248')}>
              <S.Number>248</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl249')}>
              <S.Number>249</S.Number>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Sl250')}>
              <S.Number>250</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl251')}>
              <S.Number>251</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl252')}>
              <S.Number>252</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl253')}>
              <S.Number>253</S.Number>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Sl254')}>
              <S.Number>254</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl255')}>
              <S.Number>255</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl256')}>
              <S.Number>256</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl257')}>
              <S.Number>257</S.Number>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Sl258')}>
              <S.Number>258</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl259')}>
              <S.Number>259</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl260')}>
              <S.Number>260</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl261')}>
              <S.Number>261</S.Number>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Sl262')}>
              <S.Number>262</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl263')}>
              <S.Number>263</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl264')}>
              <S.Number>264</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl265')}>
              <S.Number>265</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Sl266')}>
              <S.Number>266</S.Number>
            </S.CardChapter>
          </S.Container>
            </ScrollView>
        </LinearGradient>
      )}
    </>
  )
}

export default Salmos;
