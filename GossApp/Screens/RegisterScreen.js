import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';


const RegisterScreen = () => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [school, setSchool] = useState(''); //this one might need a dropdown but idrk

  const provinceData = [
    { name: 'Alberta', cities: ["Airdrie"
    ,"Grande Prairie"
    ,"Red Deer"
    ,"Beaumont"
    ,"Hanna"
    ,"St. Albert"
    ,"Bonnyville"
    ,"Hinton"
    ,"Spruce Grove"
    ,"Brazeau"
    ,"Irricana"
    ,"Strathcona County"
    ,"Breton"
    ,"Lacombe"
    ,"Strathmore"
    ,"Calgary"
    ,"Leduc"
    ,"Sylvan Lake"
    ,"Camrose"
    ,"Lethbridge"
    ,"Swan Hills"
    ,"Canmore"
    ,"McLennan"
    ,"Taber"
    ,"Didzbury"
    ,"Medicine Hat"
    ,"Turner Valley"
    ,"Drayton Valley"
    ,"Olds"
    ,"Vermillion"
    ,"Edmonton"
    ,"Onoway"
    ,"Wood Buffalo"
    ,"Ft. Saskatchewan"
    ,"Provost"].sort() },
    { name: 'British Columbia', cities: ["Burnaby"
    ,"Lumby"
    ,"City of Port Moody"
    ,"Cache Creek"
    ,"Maple Ridge"
    ,"Prince George"
    ,"Castlegar"
    ,"Merritt"
    ,"Prince Rupert"
    ,"Chemainus"
    ,"Mission"
    ,"Richmond"
    ,"Chilliwack"
    ,"Nanaimo"
    ,"Saanich"
    ,"Clearwater"
    ,"Nelson"
    ,"Sooke"
    ,"Colwood"
    ,"New Westminster"
    ,"Sparwood"
    ,"Coquitlam"
    ,"North Cowichan"
    ,"Surrey"
    ,"Cranbrook"
    ,"North Vancouver"
    ,"Terrace"
    ,"Dawson Creek"
    ,"North Vancouver"
    ,"Tumbler"
    ,"Delta"
    ,"Osoyoos"
    ,"Vancouver"
    ,"Fernie"
    ,"Parksville"
    ,"Vancouver"
    ,"Invermere"
    ,"Peace River"
    ,"Vernon"
    ,"Kamloops"
    ,"Penticton"
    ,"Victoria"
    ,"Kaslo"
    ,"Port Alberni"
    ,"Whistler"
    ,"Langley"
    ,"Port Hardy"].sort() },
    { name: 'Manitoba', cities: ["Birtle"
    ,"Flin Flon"
    ,"Swan River"
    ,"Brandon"
    ,"Snow Lake"
    ,"The Pas"
    ,"Cranberry Portage"
    ,"Steinbach"
    ,"Thompson"
    ,"Dauphin"
    ,"Stonewall"
    ,"Winnipeg"].sort() },
    { name: 'New Brunswick', cities: ["Birtle"
    ,"Flin Flon"
    ,"Swan River"
    ,"Brandon"
    ,"Snow Lake"
    ,"The Pas"
    ,"Cranberry Portage"
    ,"Steinbach"
    ,"Thompson"
    ,"Dauphin"
    ,"Stonewall"
    ,"Winnipeg"].sort() },
    { name: 'Newfoundland and Labrador', cities: ["Argentia"
    ,"Corner Brook"
    ,"Paradise"
    ,"Bishop's Falls"
    ,"Labrador City"
    ,"Portaux Basques"
    ,"Botwood"
    ,"Mount Pearl"
    ,"St. John's"
    ,"Brigus"].sort() },
    { name: 'Northwest Territories', cities: ["Town of Hay River"
    ,"Town of Inuvik"
    ,"Yellowknife"].sort() },
    { name: 'Nova Scotia', cities: ["Amherst"
    ,"Hants County"
    ,"Pictou"
    ,"Annapolis"
    ,"Inverness County"
    ,"Pictou County"
    ,"Argyle"
    ,"Kentville"
    ,"Queens"
    ,"Baddeck"
    ,"County of Kings"
    ,"Richmond"
    ,"Bridgewater"
    ,"Lunenburg"
    ,"Shelburne"
    ,"Cape Breton"
    ,"Lunenburg County"
    ,"Stellarton"
    ,"Chester"
    ,"Mahone Bay"
    ,"Truro"
    ,"Cumberland County"
    ,"New Glasgow"
    ,"Windsor"
    ,"East Hants"
    ,"New Minas"
    ,"Yarmouth"
    ,"Halifax"
    ,"Parrsboro"].sort() },
    { name: 'Nunavut', cities: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake'].sort() },
    { name: 'Ontario', cities: ["Ajax"
    ,"Halton"
    ,"Mississauga"
    ,"Peterborough"
    ,"Atikokan"
    ,"Halton Hills"
    ,"Pickering"
    ,"Barrie"
    ,"Hamilton"
    ,"Port Bruce"
    ,"Belleville"
    ,"Hamilton-Wentworth"
    ,"Port Burwell"
    ,"Blandford-Blenheim"
    ,"Hearst"
    ,"Port Colborne"
    ,"Blind River"
    ,"Huntsville"
    ,"Port Hope"
    ,"Brampton"
    ,"Ingersoll"
    ,"Prince Edward"
    ,"Brant"
    ,"James"
    ,"Quinte West"
    ,"Brantford"
    ,"Kanata"
    ,"Renfrew"
    ,"Brock"
    ,"Kincardine"
    ,"Richmond Hill"
    ,"Brockville"
    ,"King"
    ,"Sarnia"
    ,"Burlington"
    ,"Kingston"
    ,"Sault Ste. Marie"
    ,"Caledon"
    ,"Kirkland Lake"
    ,"Scarborough"
    ,"Cambridge"
    ,"Kitchener"
    ,"Scugog"
    ,"Chatham-Kent"
    ,"Larder Lake"
    ,"Souix Lookout CoC Sioux Lookout"
    ,"Chesterville"
    ,"Leamington"
    ,"Smiths Falls"
    ,"Clarington"
    ,"Lennox-Addington"
    ,"South-West Oxford"
    ,"Cobourg"
    ,"Lincoln"
    ,"St. Catharines"
    ,"Cochrane"
    ,"Lindsay"
    ,"St. Thomas"
    ,"Collingwood"
    ,"London"
    ,"Stoney Creek"
    ,"Cornwall"
    ,"Loyalist Township"
    ,"Stratford"
    ,"Cumberland"
    ,"Markham"
    ,"Sudbury"
    ,"Deep River"
    ,"Metro Toronto"
    ,"Temagami"
    ,"Dundas"
    ,"Merrickville"
    ,"Thorold"
    ,"Durham"
    ,"Milton"
    ,"Thunder Bay"
    ,"Dymond"
    ,"Nepean"
    ,"Tillsonburg"
    ,"Ear Falls"
    ,"Newmarket"
    ,"Timmins"
    ,"East Gwillimbury"
    ,"Niagara"
    ,"Toronto"
    ,"East Zorra-Tavistock"
    ,"Niagara Falls"
    ,"Uxbridge"
    ,"Elgin"
    ,"Niagara-on-the-Lake"
    ,"Vaughan"
    ,"Elliot Lake"
    ,"North Bay"
    ,"Wainfleet"
    ,"Flamborough"
    ,"North Dorchester"
    ,"Wasaga Beach"
    ,"Fort Erie"
    ,"North Dumfries"
    ,"Waterloo"
    ,"Fort Frances"
    ,"North York"
    ,"Waterloo"
    ,"Gananoque"
    ,"Norwich"
    ,"Welland"
    ,"Georgina"
    ,"Oakville"
    ,"Wellesley"
    ,"Glanbrook"
    ,"Orangeville"
    ,"West Carleton"
    ,"Gloucester"
    ,"Orillia"
    ,"West Lincoln"
    ,"Goulbourn"
    ,"Osgoode"
    ,"Whitby"
    ,"Gravenhurst"
    ,"Oshawa"
    ,"Wilmot"
    ,"Grimsby"
    ,"Ottawa"
    ,"Windsor"
    ,"Guelph"
    ,"Ottawa-Carleton"
    ,"Woolwich"
    ,"Haldimand-Norfork"
    ,"Owen Sound"
    ,"York"].sort() },
    { name: 'Prince Edward Island', cities: ["Alberton"
    ,"Montague"
    ,"Stratford"
    ,"Charlottetown"
    ,"Souris"
    ,"Summerside"
    ,"Cornwall"].sort() },
    { name: 'Quebec', cities: ["Alma"
    ,"Fleurimont"
    ,"Longueuil"
    ,"Amos"
    ,"Gaspe"
    ,"Marieville"
    ,"Anjou"
    ,"Gatineau"
    ,"Mount Royal"
    ,"Aylmer"
    ,"Hull"
    ,"Montreal"
    ,"Beauport"
    ,"Joliette"
    ,"Montreal Region"
    ,"Bromptonville"
    ,"Jonquiere"
    ,"Montreal-Est"
    ,"Brosssard"
    ,"Lachine"
    ,"Quebec"
    ,"Chateauguay"
    ,"Lasalle"
    ,"Saint-Leonard"
    ,"Chicoutimi"
    ,"Laurentides"
    ,"Sherbrooke"
    ,"Coaticook"
    ,"LaSalle"
    ,"Sorel"
    ,"Coaticook"
    ,"Laval"
    ,"Thetford Mines"
    ,"Dorval"
    ,"Lennoxville"
    ,"Victoriaville"
    ,"Drummondville"
    ,"Levis"].sort() },
    { name: 'Saskatchewan', cities: ["Avonlea"
    ,"Melfort"
    ,"Swift Current"
    ,"Colonsay"
    ,"Nipawin"
    ,"Tisdale"
    ,"Craik"
    ,"Prince Albert"
    ,"Unity"
    ,"Creighton"
    ,"Regina"
    ,"Weyburn"
    ,"Eastend"
    ,"Saskatoon"
    ,"Wynyard"
    ,"Esterhazy"
    ,"Shell Lake"
    ,"Yorkton"
    ,"Gravelbourg"].sort() },
    { name: 'Yukon', cities: ["Carcross"
    ,"Whitehorse"].sort() },
  ];

//   all need dropdowns
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [sex, setSex] = useState('');
  const [orientation, setOrientation] = useState('');

  const navigation = useNavigation();



  const ProvinceDropdown = () => {
    const handleProvinceChange = (value) => {
      setSelectedProvince(value);
    };
  
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Province:</Text>
        <Picker
          selectedValue={selectedProvince}
          onValueChange={handleProvinceChange}
          style={styles.picker}
        >
          {provinceData.map((province) => (
            <Picker.Item key={province.name} label={province.name} value={province.name} />
          ))}
        </Picker>
        <Text style={styles.selectedValue}>{selectedProvince}</Text>
      </View>
    );
  };
  
  const CityDropdown = () => {
    const handleCityChange = (value) => {
      setSelectedCity(value);
    };
  
    const selectedProvinceData = provinceData.find((province) => province.name === selectedProvince);
  
    if (!selectedProvinceData) {
      return null;
    }
  
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>City:</Text>
        <Picker
          selectedValue={selectedCity}
          onValueChange={handleCityChange}
          style={styles.picker}
        >
          {selectedProvinceData.cities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>
        <Text style={styles.selectedValue}>{selectedCity}</Text>
      </View>
    );
  };
  
  
  const saveProfile = () => {
    console.log('saving to profile');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirst(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLast(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <ProvinceDropdown/>
      <CityDropdown/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={saveProfile} style={styles.button}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;