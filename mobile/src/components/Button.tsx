import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
    title: string;
    type?: 'Primary' | 'Secondary'
}

export function Button({ title, type = 'Primary', ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            bg={type === 'Secondary' ? 'red.500' : 'yellow.500'}
            _pressed={{
                bg: type === 'Secondary' ? 'red.600' : 'yellow.600'
            }}
            _loading={{
                _spinner: {
                    color: 'black'
                }
            }}
            {...rest}  //res sempre por ultimo (caso tenha esquecido algo)
        >
            <Text
                fontSize="sm"
                fontFamily="heading"
                color={type === 'Secondary' ? 'white' : 'black'}
                textTransform="uppercase"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}