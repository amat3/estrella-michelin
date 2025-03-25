import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { useEvent } from 'expo'
import { useVideoPlayer, VideoView } from 'expo-video';
import { styles } from './Video.styles';

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'


export function Video() {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing});

    return (
        <View style={styles.container}>
            <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
            <View style={styles.controlsContainer}>
                <Button 
                    title={isPlaying ? 'Pause' : 'Play'} 
                    onPress={() => {
                        if (isPlaying) {
                            player.pause();
                        } else {
                            player.play();
                        }
                    }}
                    
                />     
            </View>
        </View>
    );
}