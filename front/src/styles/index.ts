import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#EDEAFD',
      200: '#B0A6F0',
      300: '#5126EA',
      400: '#4529E6',
    },
    grey: {
      10: '#FDFDFD',
      50: '#F8F9FA',
      100: '#F1F3F5',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#868E96',
      700: '#495057',
      800: '#212529',
      900: '#0B0D0D',
    },
    white: '#FFFFFF',
    sucess: {
      100: '#DDF3E4',
      200: '#CCEBD7',
      300: '#18794E',
    },
    alert: {
      100: '#FFE5E5',
      200: '#FDD8D8',
      300: '#CD2B31',
    },
  },
  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        default: {
          bg: 'brand.400',
          borderRadius: 'sm',
          color: 'white',
          _hover: {
            bg: 'brand.300',
          },
        },
        defaultDisable: {
          bg: 'brand.200',
          borderRadius: 'sm',
          color: 'white',
          cursor: 'default',
        },
        disable: {
          bg: 'grey.400',
          borderRadius: 'sm',
          color: 'white',
          cursor: 'default',
        },
        darkGray: {
          bg: 'grey.900',
          borderRadius: 'sm',
          color: 'white',
          _hover: {
            bg: 'grey.800',
          },
        },
        lightGray: {
          bg: 'grey.300',
          borderRadius: 'sm',
          color: 'grey.700',
          _hover: {
            bg: 'grey.400',
          },
        },
        white: {
          bg: 'white',
          borderRadius: 'sm',
          color: 'grey.900',
        },
        outline: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'brand.400',
          border: '2px',
          borderColor: 'brand.400',
        },
        outlineLight: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'white',
          border: '2px',
          borderColor: 'white',
          _hover: {
            bg: 'white',
            color: 'grey.900',
          },
        },
        outlineDark: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'grey.900',
          border: '2px',
          borderColor: 'grey.900',
          _hover: {
            bg: 'grey.900',
            color: 'white',
          },
        },
        alert: {
          bg: 'alert.100',
          borderRadius: 'sm',
          color: 'alert.300',
          _hover: {
            bg: 'alert.200',
          },
        },
        sucess: {
          bg: 'sucess.100',
          borderRadius: 'sm',
          color: 'sucess.300',
          _hover: {
            bg: 'sucess.200',
          },
        },
      },
    },
    Link: {
      variants: {
        default: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'grey.900',
          padding: '12px',
          fontWeight: 'bold',
          _hover: {
            textDecoration: 'none',
            bg: 'grey.100',
          },
        },
      },
    },
    Input: {
      variants: {
        default: {
          field: {
            bg: 'none',
            outline: '2px solid',
            outlineColor: 'grey.600',
            borderRadius: 'base',
            _placeholder: {
              color: 'grey.600',
            },
            _hover: {
              bg: 'grey.100',
            },
            _focus: {
              bg: 'white',
              outlineColor: 'brand.400',
              color: 'gray.900',
            },
          },
        },
      },
      defaultProps: {
        variant: 'default',
      },
    },
    Select: {
      variants: {
        default: {
          field: {
            bg: 'none',
            outline: '2px solid',
            outlineColor: 'gray.600',
            borderRadius: 'base',
            _placeholder: {
              color: 'gray.600',
            },
            _hover: {
              bg: 'gray.100',
            },
            _focus: {
              bg: 'white',
              outlineColor: 'brand.400',
              color: 'gray.900',
            },
          },
        },
      },
      defaultProps: {
        variant: 'default',
      },
    },
  },
});

export { theme };
