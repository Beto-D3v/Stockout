import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignInCompany from '../pages/SignInCompany'
import ClientRegister from '../pages/ClientRegister'
import CompanyRegister from '../pages/CompanyRegister'
import Menu from '../pages/Menu'
import AbaMercado from '../pages/AbaMercado'
import AbaProdutos from '../pages/AbaProdutos'
import Carrinho from '../pages/Carrinho'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
     <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component = {Welcome}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="SignIn"
            component = {SignIn}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="ClientRegister"
            component = {ClientRegister}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="CompanyRegister"
            component = {CompanyRegister}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="SignInCompany"
            component = {SignInCompany}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="Menu"
            component = {Menu}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="AbaMercado"
            component = {AbaMercado}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="AbaProdutos"
            component = {AbaProdutos}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="Carrinho"
            component = {Carrinho}
            options={{headerShown:false}}
        />


     </Stack.Navigator> )}
