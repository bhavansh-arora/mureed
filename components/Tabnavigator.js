const Tabnavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.creem,
        inactiveTintColor: colors.shadow,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="Countaer"
        component={Countaer}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="touch-app" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="time-slot" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendars"
        component={Calendars}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={32} color={color} />
          ),
        }}
      />

  
    </Tab.Navigator>
  );
}