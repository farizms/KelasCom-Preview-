import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return(
    <Onboarding
    onSkip={() => navigation.navigate('SignInScreen')}
    onDone={() => navigation.navigate('SignInScreen')}
  pages={[
    {
      
      backgroundColor: '#231f20',
      image: <Image source={require('../../assets/1.png')} />,
      title: 'Materi lengkap, eksklusif, dan berjangka panjang',
      subtitle: 'Setiap materi di Kelas.com diulas secara lengkap dan mendalam serta sifatnya eksklusif atau belum pernah ada sebelumnya. Selain itu, semua materi pembelajaran berjangka panjang sehingga tetap relevan sampai kapanpun.',
    },
    {
      backgroundColor: '#231f20',
      image: <Image source={require('../../assets/2.png')} />,
      title: 'Waktu belajar fleksibel',
      subtitle: 'Tak ada lagi alasan tidak punya waktu untuk belajar. Karena sekarang kamu dapat mengakses kelasmu kapan saja dan dimana saja!',
    },
    {
      backgroundColor: '#231f20',
      image: <Image source={require('../../assets/3.png')} />,
      title: 'Kualitas Video HD',
      subtitle: 'Konten di Kelas.com tentunya juga diimbangi oleh visualisasi yang luar biasa. Nikmati semua  kelas dengan video beresolusi tinggi.',
    }
  ]}
/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default OnboardingScreen;