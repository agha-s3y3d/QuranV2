import * as React from "react";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import GroupBg from "./assets/Group1.svg";
import BriefcasePink from "./assets/briefcasePink.svg";
import BriefcaseBlue from "./assets/briefcaseBlue.svg";
import UserOctagon from "./assets/user-octagon.svg";
import BookIcon from "./assets/book.svg";
import BriefcaseIcon from "./assets/briefcase.svg";
import ArrowIcon from "./assets/Arrow.svg";
import SearchIcon from "./assets/search.svg";
import DeleteIcon from "./assets/delete.svg";
import EditIcon from "./assets/edit.svg";
import ButtonBg from "./assets/Button.svg";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, info) {
    console.error("App crashed:", error, info);
  }

  render() {

    if (this.state.hasError) {
      return (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>
            یه خطا پیش اومد
          </Text>

          <Text style={styles.errorText}>
            {String(this.state.error?.message || this.state.error)}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}



function useEstedadFonts() {

  const [fontsLoaded, fontError] = useFonts({

    EstedadLight:
      require("./assets/Fonts/Estedad-FD-Light.ttf"),

    EstedadRegular:
      require("./assets/Fonts/Estedad-FD-Regular.ttf"),

    EstedadMedium:
      require("./assets/Fonts/Estedad-FD-Medium.ttf"),

    EstedadBold:
      require("./assets/Fonts/Estedad-FD-Bold.ttf"),

    EstedadBlack:
      require("./assets/Fonts/Estedad-FD-Black.ttf"),

  });


  useEffect(() => {

    if (fontError) {
      console.error(
        "خطا در لود فونت:",
        fontError
      );
    }

  }, [fontError]);


  return fontsLoaded || fontError;
}



function Home({ navigation }) {

  const fontsReady = useEstedadFonts();

  if (!fontsReady)
    return null;


  return (

    <View style={styles.container}>


      <View style={styles.bg}>
        <GroupBg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
      </View>


      <View style={styles.page}>


        <TouchableOpacity
          style={styles.studentButton}
          onPress={() => navigation.navigate("Students")}
        >

          <Text style={styles.mainText}>
            قرآن آموزان
          </Text>

        </TouchableOpacity>


        <View style={styles.section}>


          <View style={styles.rowTitle}>

            <Text style={styles.title}>
              آیتم های خواندنی
            </Text>

            <Text style={styles.subTitle}>
              دیدن همه
            </Text>

          </View>


          <View style={styles.cards}>


            <View style={styles.pinkCard}>

              <View style={styles.rowTitle}>

                <Text style={styles.grayText}>
                  غیره
                </Text>


                <View style={styles.iconPink}>
                  <BriefcasePink
                    width={16}
                    height={16}
                  />
                </View>

              </View>


              <Text style={styles.number}>
                150 مورد
              </Text>


              <View style={styles.progress}>
                <View style={styles.progressPink}/>
              </View>


            </View>



            <View style={styles.blueCard}>


              <View style={styles.rowTitle}>

                <Text style={styles.grayText}>
                  سوره ها
                </Text>


                <View style={styles.iconBlue}>
                  <BriefcaseBlue
                    width={16}
                    height={16}
                  />
                </View>

              </View>


              <Text style={styles.number}>
                114 مورد
              </Text>


              <View style={styles.progress}>
                <View style={styles.progressBlue}/>
              </View>


            </View>


          </View>


        </View>
                <View style={styles.section}>

          <View style={styles.centerTitle}>
            <Text style={styles.title}>
              خروجی پایگاه داده
            </Text>
          </View>


          <View style={styles.databaseBox}>


            <View style={styles.dbRow}>


              <TouchableOpacity style={styles.dbButton}>

                <Text style={styles.dbText}>
                  DB
                </Text>


                <View style={styles.dbIconPurple}>
                  <UserOctagon
                    width={18}
                    height={18}
                  />
                </View>

              </TouchableOpacity>



              <TouchableOpacity style={styles.dbButton}>


                <Text style={styles.dbText}>
                  Excel
                </Text>


                <View style={styles.dbIconOrange}>

                  <BookIcon
                    width={18}
                    height={18}
                  />

                </View>


              </TouchableOpacity>


            </View>



            <TouchableOpacity style={styles.dbButtonFull}>

              <Text style={styles.dbText}>
                PDF
              </Text>


              <View style={styles.dbIconOrange}>

                <BriefcaseIcon
                  width={18}
                  height={18}
                />

              </View>


            </TouchableOpacity>


          </View>


        </View>



        <View style={styles.section}>


          <View style={styles.centerTitle}>

            <Text style={styles.title}>
              فراخوانی پایگاه داده
            </Text>

          </View>



          <TouchableOpacity style={styles.dbButtonFull}>


            <Text style={styles.dbText}>
              DB
            </Text>


            <View style={styles.dbIconPurple}>

              <UserOctagon
                width={18}
                height={18}
              />

            </View>


          </TouchableOpacity>


        </View>



      </View>

    </View>

  );

}

function Students({ navigation }) {

  const [text,setText] = useState("");

  const fontsReady = useEstedadFonts();

  if(!fontsReady)
    return null;


  return (

    <View style={styles.container}>


      <View style={styles.bg}>

        <GroupBg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />

      </View>


      <View style={styles.page}>


        <View style={styles.header}>


          <Text style={styles.title}>
            قرآن آموزان
          </Text>


          <TouchableOpacity
            style={styles.backButton}
            onPress={()=>navigation.goBack()}
          >

            <ArrowIcon
              width={20}
              height={20}
            />

          </TouchableOpacity>


        </View>



        <View style={styles.searchBox}>


          <SearchIcon
            width={18}
            height={18}
          />


          <TextInput

            style={styles.input}

            value={text}

            placeholder="دنبال کی میگردی؟"

            onChangeText={setText}

            textAlign="right"

          />


        </View>



        <ScrollView
          style={styles.list}
        >


        {[
          {
            name:"اتابک",
            tag:"پسر",
            color:"#15803d"
          },
          {
            name:"محبین",
            tag:"دختر",
            color:"#ea580c"
          }

        ].map((item,idx)=>(


          <TouchableOpacity
            key={idx}
            style={styles.studentCard}
          >


            <View style={styles.studentTop}>


              <View style={styles.tags}>


                <Text style={styles.nameTag}>
                  {item.name}
                </Text>



                <Text
                  style={[
                    styles.tag,
                    {
                      borderColor:item.color,
                      color:item.color
                    }
                  ]}
                >

                  {item.tag}

                </Text>


              </View>


              <Text style={styles.phone}>
                +98 9918787767
              </Text>


            </View>
                          <View style={styles.studentBottom}>


                <View style={styles.studentInfo}>


                  <Text style={styles.studentName}>
                    سید علیرضا طباطبایی
                  </Text>


                  <Text style={styles.age}>
                    13
                  </Text>


                </View>



                <View style={styles.actions}>


                  <TouchableOpacity>

                    <DeleteIcon
                      width={25}
                      height={25}
                    />

                  </TouchableOpacity>



                  <TouchableOpacity>

                    <EditIcon
                      width={25}
                      height={25}
                      style={{display:"flex",alignItems:"center",justifyContent:"center"}}
                    />

                  </TouchableOpacity>


                </View>


              </View>



          </TouchableOpacity>


        ))}



        </ScrollView>



        <TouchableOpacity

          style={styles.addButton}

          onPress={()=>
            navigation.navigate("AddStudents")
          }

        >


          <View style={styles.buttonBg}>

            <ButtonBg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />

          </View>



          <Text style={styles.addText}>
            افزودن قرآن آموز
          </Text>


        </TouchableOpacity>



      </View>


    </View>

  );

}
function AddStudents({ navigation }) {

  const fontsReady = useEstedadFonts();

  if(!fontsReady)
    return null;


  return (

    <View style={styles.container}>


      <View style={styles.bg}>

        <GroupBg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />

      </View>



      <View style={styles.page}>


        <View style={styles.header}>


          <Text style={styles.title}>
            افزودن قرآن آموز
          </Text>


          <TouchableOpacity

            style={styles.backButton}

            onPress={()=>
              navigation.goBack()
            }

          >

            <ArrowIcon
              width={20}
              height={20}
            />


          </TouchableOpacity>


        </View>


      </View>


    </View>

  );

}
const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"#fff",
},

bg:{
  position:"absolute",
  width:"100%",
  height:"100%",
  overflow:"hidden",
},

page:{
  flex:1,
  padding:25,
  gap:16,
},

studentButton:{
  width:"100%",
  height:96,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:19,
  backgroundColor:"#E7F3FF",
},

mainText:{
  fontFamily:"EstedadRegular",
  fontSize:19,
  color:"#000",
},


section:{
  gap:24,
},


rowTitle:{
  height:24,
  flexDirection:"row-reverse",
  alignItems:"center",
  justifyContent:"space-between",
},


centerTitle:{
  height:24,
  alignItems:"center",
  justifyContent:"center",
},


title:{
  fontFamily:"EstedadBold",
  fontSize:19,
  color:"#000",
},


subTitle:{
  fontFamily:"EstedadMedium",
  fontSize:14,
  color:"#666",
},


grayText:{
  fontFamily:"EstedadLight",
  fontSize:16,
  color:"#666",
},


cards:{
  flexDirection:"row-reverse",
  gap:16,
},


pinkCard:{
  flex:1,
  height:112,
  padding:15,
  borderRadius:19,
  backgroundColor:"#FFE7F5",
  gap:8,
},


blueCard:{
  flex:1,
  height:112,
  padding:15,
  borderRadius:19,
  backgroundColor:"#E7F3FF",
  gap:8,
},


iconPink:{
  width:24,
  height:24,
  borderRadius:7,
  backgroundColor:"#FFD7EB",
  alignItems:"center",
  justifyContent:"center",
},


iconBlue:{
  width:24,
  height:24,
  borderRadius:7,
  backgroundColor:"#CBE5FF",
  alignItems:"center",
  justifyContent:"center",
},


number:{
  fontFamily:"EstedadBold",
  fontSize:22,
},


progress:{
  height:6,
  borderRadius:3,
  backgroundColor:"#fff",
},


progressPink:{
  width:"40%",
  height:"100%",
  backgroundColor:"#F478B8",
  borderRadius:3,
},


progressBlue:{
  width:"60%",
  height:"100%",
  backgroundColor:"#0087FF",
  borderRadius:3,
},



/* database */

databaseBox:{
  width:"100%",
  height:144,
  gap:12,
},


dbRow:{
  width:"100%",
  height:66,
  flexDirection:"row-reverse",
  gap:12,
},


dbButton:{
  flex:1,
  height:66,
  flexDirection:"row-reverse",
  alignItems:"center",
  justifyContent:"space-between",
  backgroundColor:"#fff",
  borderRadius:16,
  padding:20,

  shadowColor:"#000",
  shadowOpacity:.15,
  shadowRadius:8,
  elevation:5,
},


dbButtonFull:{
  width:"100%",
  height:66,
  flexDirection:"row-reverse",
  alignItems:"center",
  justifyContent:"space-between",
  backgroundColor:"#fff",
  borderRadius:16,
  padding:20,

  shadowColor:"#000",
  shadowOpacity:.15,
  shadowRadius:8,
  elevation:5,
},


dbText:{
  fontFamily:"EstedadMedium",
  fontSize:17,
},


dbIconPurple:{
  width:34,
  height:34,
  borderRadius:9,
  backgroundColor:"#EDE4FF",
  alignItems:"center",
  justifyContent:"center",
},


dbIconOrange:{
  width:34,
  height:34,
  borderRadius:9,
  backgroundColor:"#FFE6D4",
  alignItems:"center",
  justifyContent:"center",
},


/* students */

header:{
  width:"100%",
  height:24,
  alignItems:"center",
  justifyContent:"center",
},


backButton:{
  position:"absolute",
  left:0,
  width:24,
  height:24,
},


searchBox:{
  width:"100%",
  height:43,
  backgroundColor:"#fff",
  borderRadius:16,
  flexDirection:"row-reverse",
  alignItems:"center",
  justifyContent:"center",
  paddingHorizontal:19,

  shadowColor:"#000",
  shadowOpacity:.15,
  shadowRadius:8,
  elevation:5,
},


input:{
  flex:1,
  fontFamily:"EstedadMedium",
  textAlign:"right",
  color:"#000",
},


list:{
  flex:1,
},


studentCard:{
  width:"100%",
  height:80,
  backgroundColor:"#fff",
  borderRadius:16,
  marginBottom:12,
  paddingHorizontal:20,
  paddingVertical:8,

  shadowColor:"#000",
  shadowOpacity:.15,
  shadowRadius:8,
  elevation:5,
},
// students bottom

studentTop:{
  width:"100%",
  height:20,
  flexDirection:"row-reverse",
  justifyContent:"space-between",
  alignItems:"center",
},


tags:{
  flexDirection:"row-reverse",
  gap:4,
  height:20,
},


nameTag:{
  height:20,
  paddingHorizontal:8,
  borderRadius:10,
  borderWidth:2,
  borderColor:"#9d174d",
  color:"#9d174d",
  fontFamily:"EstedadBold",
  fontSize:11,
  textAlignVertical:"center",
},


tag:{
  height:20,
  paddingHorizontal:8,
  borderRadius:10,
  borderWidth:2,
  fontFamily:"EstedadBold",
  fontSize:11,
  textAlignVertical:"center",
},


phone:{
  fontFamily:"EstedadMedium",
  fontSize:13,
  color:"#666",
},


studentBottom:{
  width:"100%",
  height:40,
  flexDirection:"row-reverse",
  justifyContent:"space-between",
  alignItems:"center",
},


studentInfo:{
  flexDirection:"row-reverse",
  alignItems:"center",
  gap:8,
},


studentName:{
  fontFamily:"EstedadBold",
  fontSize:16,
},


age:{
  fontFamily:"EstedadBlack",
  fontSize:16,
},


actions:{
  flexDirection:"row",
  gap:4,
},


// add button

addButton:{
  width:"100%",
  height:52,
  alignItems:"center",
  justifyContent:"center",
},


buttonBg:{
  position:"absolute",
  width:"100%",
  height:"100%",
},


addText:{
  fontFamily:"EstedadBold",
  fontSize:20,
  color:"#fff",
},


errorBox:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#fff",
  padding:24,
},


errorTitle:{
  color:"red",
  fontWeight:"bold",
},


errorText:{
  color:"#555",
  textAlign:"center",
  fontSize:12,
},

});
const Stack = createNativeStackNavigator();


export default function App(){

  return (

    <ErrorBoundary>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
        >

          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="Students"
            component={Students}
          />

          <Stack.Screen
            name="AddStudents"
            component={AddStudents}
          />


        </Stack.Navigator>


      </NavigationContainer>


    </ErrorBoundary>

  );

}