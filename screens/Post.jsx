import axios from 'axios'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components/native'
import { Loading } from '../components/Loading'

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`

export const PostScreen = ({route, navigation}) => {
    const {id, title} = route.params
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState([])

    useEffect(() => {
        navigation.setOptions({
            title
        })
        setIsLoading(true)
        axios.get(`https://64d8be1d5f9bf5b879ce8550.mockapi.io/vice/articles/${id}`).then(({data}) => {
            setArticle(data)
        }).catch(error => {
            console.log(error)
            alert('An error happend')
        }).finally(() => { setIsLoading(false) })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <ScrollView style={{
            paddingHorizontal: 20
        }}>
            <PostImage source={{uri: article.imageUrl}} />
            <PostText>{article.text}</PostText>
        </ScrollView>
    )
}