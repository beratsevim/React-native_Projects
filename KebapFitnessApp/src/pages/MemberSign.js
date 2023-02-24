import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";


function MemberSign({navigation}) {
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [age, setAge] = useState(null);
    const [mail, setMail] = useState(null);
    const [hometown, setHometown] = useState(null);

    function handleSubmit() {
        if (!name ||!surname ||!age ||!mail ||!hometown) 
        {
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz.');
            return;
        }
        const user = {
            name,
            surname,
            age,
            mail,
            hometown
        };

        navigation.navigate('MemberResultScreen',{user});
    }
    return (
        <SafeAreaView>
            <Input
                label="Üye Adı:"
                placeholder="Üyenin ismini giriniz..."
                onChangeText={setName}
            />
            <Input
                label="Üye Soyadı:"
                placeholder="Üyenin soyismini giriniz..."
                onChangeText={setSurname}
            />
            <Input
                label="Üye Yaşı:"
                placeholder="Üyenin yaşını giriniz..."
                onChangeText={setAge}
            />
            <Input
                label="Üye E-posta:"
                placeholder="Üyenin e-posta adresini giriniz..."
                onChangeText={setMail}
            />
            <Input
                label="Üye Memleketi:"
                placeholder="Üyenin memleketini giriniz..."
                onChangeText={setHometown}
            />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}
export default MemberSign;