import { View, Text } from "react-native";
import styled from 'styled-components/native'

const PostView = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-botttom-style: solid;
`

const PostImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 12px;
`

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`

const PostDetails = styled.View`
    flex-direction: column;
    justify-content: center;
    flex: 1;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 2px;
`

export const Post = ({title, imageUrl, createdAt}) => {
    return (
        <PostView>
            <PostImage source={{uri: imageUrl}} />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    )
}