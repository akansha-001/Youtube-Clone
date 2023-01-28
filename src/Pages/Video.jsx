import React from 'react'
import styled from 'styled-components';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
// import { Card } from '../components/Card';
import Card from "../components/Card";

const Container = styled.div`
display: flex;
gap: 24px;
/* overflow:"auto"; */
`

const Content = styled.div`
flex: 5;
`

const VideoWrapper = styled.div`
`

const Title = styled.h1`
 font-size : 18px;
 font-weight: 400;
 margin-top: 20px;
 margin-bottom: 10px;
color: ${({theme})=> theme.text};
`

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Info = styled.span`
color: ${({theme})=> theme.textSoft};
 

`

const Cointainer = styled.div
`


`

const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme})=> theme.text};
`



const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme})=> theme.soft};

`

const Recommendation = styled.div`
flex: 2;
`

const Channel = styled.div`
display: flex;
justify-content: space-between;
`

const ChannelInfo = styled.div`
display: flex;
gap : 20px;
`

const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color : ${({theme})=>theme.text};
`



const ChannelName = styled.span`
font-weight:500;

`



const ChannelCounter = styled.div`
margin-top: 5px;
margin-bottom: 20px;
color : ${({theme})=>theme.textSoft};
font-size: 12px;
`



const Description = styled.p`
font-size: 14px;

`


const Subscribe = styled.button`
color: white;
background-color: #cc1a00;
font-weight: 500;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`


function Video() {
  return (
    <Container>
      <Content>
      <VideoWrapper>
        <iframe 
        width="100%"
        height="720"
        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
        Title="Youtube video player"
        frameBorder="0"
        allow="acceleromter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
      </VideoWrapper>
      <Title>Test video</Title>
      <Details>
        <Info>7,948,154 views . Jun 22, 2022</Info>
        <Buttons>
          <Button><ThumbUpOutlinedIcon/>123</Button>
          <Button><ThumbDownOffAltOutlinedIcon/>1</Button>
          <Button><ReplyOutlinedIcon/>Share</Button>
          <Button><AddTaskOutlinedIcon/>Save</Button>
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
        <ChannelInfo>
          <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
          <ChannelDetail>
              <ChannelName>AlishaTube</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                This is Alisha's Youtube channel.
                If this channel's content interests you then do consider subscribing to my channel.
                And hit the bell notification so that you never miss any videos of this chanel.
              </Description>
            </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr/>
      <Comments></Comments>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
}

export default Video
