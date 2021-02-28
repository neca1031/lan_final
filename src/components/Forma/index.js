import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    StyledFieldset,
    StyledTextArea,
    FormSelect
} from './FormaElements';

const FormaElementi = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon></Icon>
                    <FormContent>
                        <Form action='#'>
                        <FormH1>Posaljite upit za izradu sajta</FormH1>
                        <FormLabel htmlFor='for'>Ime i prezime</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Broj telefona</FormLabel>
                        <FormInput type='tel' required />
                        <StyledFieldset>
                            <legend>Vrsta usluge</legend>
                            <label>
                                <input type='radio' value='veb_sajt' name='usluga' />
                                Web sajt      
                            </label>
                            <label>
                                <input type='radio' value='drustvene' name='usluga' />
                                Drustvene mreze
                            </label>
                            <label>
                                <input type='radio' value='SEO' name='usluga' />
                                SEO usluge
                            </label>
                            <label>
                                <input type='radio' value='dizajn' name='usluga' />
                                Graficki dizajn
                            </label>
                        </StyledFieldset>
                        <FormLabel htmlFor='for'>Budzet</FormLabel>
                        <FormSelect>
                            <option value='500-1000e'>500-1000e</option>
                            <option value='1000-1500e'>1000-1500e</option>
                            <option value='1500-2000e'>1500-2000e</option>
                            <option value='2000e+'>2000e+</option>
                        </FormSelect>
                        <FormLabel htmlFor='message'>Dodatna poruka</FormLabel>
                        <StyledTextArea name='message' />
                        <FormButton type='submit'>Posalji</FormButton>
                        {/* <Text>Nesto</Text> */}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default FormaElementi;
