import axios from "axios";
import { View, Text } from "react-native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = () => {
        setIsLoading(true)
        axios.get('https://64d8be1d5f9bf5b879ce8550.mockapi.io/vice/articles').then(({data}) => {
            setArticles(data)
        }).catch(error => {
            console.log(error)
            alert('An error happend')
        }).finally(() => { setIsLoading(false) })
    }

    if (1 > 2) {
        return <Loading />
    }

    return (
        <View>
           
            <FlatList
                refreshControl={ <RefreshControl refreshing={isLoading} onRefresh={fetchArticles} />}
                data={articles}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PostScreen', { id: item.id, title: item.title })}>
                        <Post
                        title={item.title}
                        createdAt={item.createdAt}
                        text={item.text}
                        imageUrl={item.imageUrl}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}