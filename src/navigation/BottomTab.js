import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Icons } from '../Assets/Icons';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../Assets/Colors';
import DoctorProfile from '../Screens/DoctorScreens/ProfileDr';
import WorkSpace from '../Screens/DoctorScreens/WorkSpaceDr';
import PatientListDr from '../Screens/DoctorScreens/PatientListDr';
import HomeDr from '../Screens/DoctorScreens/HomeDr';

const TabArr = [
  { route: 'Home', label: 'Home', type: 'AntDesign', icon: 'home', component: HomeDr },
  { route: 'Patient', label: 'Patient', type: 'FontAwesome6', icon: 'list-check', component: PatientListDr },
  { route: 'WorkSpace', label: 'Work Space', type: 'FontAwesome5', icon: 'notes-medical', component: WorkSpace },
  { route: 'Profile', label: 'DoctorProfile', type: 'FontAwesome5', icon: 'user', component: DoctorProfile },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };

const circle1 = { 0: { scale: 0 }, 0.3: { scale: 0.9 }, 0.5: { scale: 0.2 }, 0.8: { scale: 0.7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton: React.FC<any> = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View>(null);
  const circleRef = useRef<Animatable.View>(null);
  const textRef = useRef<Animatable.Text>(null);

  useEffect(() => {
    focused
      ? (viewRef.current?.animate(animate1), circleRef.current?.animate(circle1), textRef.current?.transitionTo({ scale: 1 }))
      : (viewRef.current?.animate(animate2), circleRef.current?.animate(circle2), textRef.current?.transitionTo({ scale: 0 }));
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={200} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon type={item.type as keyof typeof Icons} name={item.icon} color={focused ? Colors.white : Colors.app} />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTab: React.FC = () => (
  <Tab.Navigator initialRouteName='Profile' screenOptions={{
    headerShown: false,
    tabBarStyle: styles.tabBar,
  }}>
    {TabArr.map((item, index) => (
      <Tab.Screen key={index} name={item.route} component={item.component} options={{
        tabBarShowLabel: false,
        tabBarButton: (props) => <TabButton {...props} item={item} />,
      }} />
    ))}
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.app,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.app,
  }
});

export default BottomTab;
