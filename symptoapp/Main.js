import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Config from './config';

export default class MainView extends Component {
    constructor(props)
    {
        super(props);

        this.state = {result: ''}
        this.config = new Config();
    }

    componentDidMount() {
        console.log(`api uri: ${this.config.api_uri}`);
        fetch(`${this.config.api_uri}/test`).then((response) => {
            response.json().then((json) => {
            console.log(`response json: ${json}`);
            this.setState({result: json});
            });
        });
    }

    render() {
        console.log(`mainview render`);
        return (<>
                <SafeAreaView>
                    <ScrollView>
                    <Header></Header>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>MainView</Text>
                        </View>
                        <Text style={styles.sectionDescription}>{this.state.result}</Text>
                    </View>
                    </ScrollView>
                </SafeAreaView>
            </>);
    }
}

const styles = StyleSheet.create({
scrollView: {
    backgroundColor: Colors.lighter,
},
engine: {
    position: 'absolute',
    right: 0,
},
body: {
    backgroundColor: Colors.white,
},
sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
},
sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
},
sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
},
highlight: {
    fontWeight: '700',
},
footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
},
});

