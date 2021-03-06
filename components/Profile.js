import React from 'react'
import { Text, View } from 'react-native';
import { Avatar, HStack, VStack } from 'native-base';
import { Button } from 'native-base';

const Profile = () => {
    return (
        <View>
        <View style={{ marginLeft: 20, marginTop: 50}}>
            <HStack>
            <VStack style={{alignItems: 'center'}}>
            <Avatar
            size="2xl"
        // source={{
        //   uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        // }}
      >
        SS
      </Avatar>
      <Text style={{marginTop: 10, marginLeft: 8}}>@sanketshevkar</Text>
      </VStack>
      <VStack style={{alignItems: 'center'}}>
      <Text style={{marginBottom: 20, marginTop: 20, marginLeft: 30, fontSize: 20, fontWeight: '500'}}>Sanket Shevkar</Text>
      <HStack style={{marginLeft: 20}}>
          <VStack style={{alignItems: 'center', marginRight: 15}}>
              <Text style={{fontWeight: '700'}}>20</Text>
              <Text>followers</Text>
          </VStack>
          <VStack style={{alignItems: 'center', marginLeft: 15}}>
              <Text style={{fontWeight: '700'}}>10</Text>
              <Text>following</Text>
          </VStack>
      </HStack>
      </VStack>
      </HStack>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
            <HStack>
                <Button style={{marginRight: 10}}>+ POT</Button>
                <Button style={{marginLeft: 10}}>+ INVEST</Button>
            </HStack>
        </View>
        </View>
    )
}

export default Profile
