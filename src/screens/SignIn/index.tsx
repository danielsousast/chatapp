import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Input, Button, ButtonText, Link, LinkText} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, signInRequest} from '../../store/ducks/auth/actions';
import Loading from '../../components/Loading';
import {ApplicationState} from '../../store';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {loading} = useSelector((state: ApplicationState) => state.auth);

  const handleLogin = () => {
    dispatch(setLoading());

    dispatch(signInRequest({email, password}));
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <Link onPress={navigateToSignUp}>
        <LinkText>Criar uma conta</LinkText>
      </Link>
      {loading && <Loading />}
    </Container>
  );
};

export default SignIn;
