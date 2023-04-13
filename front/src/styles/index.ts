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
    success: {
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
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'brand.300',
          },
        },
        defaultDisable: {
          bg: 'brand.200',
          borderRadius: 'sm',
          color: 'white',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          cursor: 'default',
        },
        disable: {
          bg: 'gray.400',
          borderRadius: 'sm',
          color: 'white',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          cursor: 'default',
        },
        darkGray: {
          bg: 'gray.900',
          borderRadius: 'sm',
          color: 'white',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'gray.800',
          },
        },
        lightGray: {
          bg: 'gray.300',
          borderRadius: 'sm',
          color: 'gray.700',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'gray.400',
          },
        },
        white: {
          bg: 'white',
          borderRadius: 'sm',
          color: 'gray.900',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
        },
        outline: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'brand.400',
          border: '2px',
          borderColor: 'brand.400',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
        },
        outlineLight: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'white',
          border: '2px',
          borderColor: 'white',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'white',
            color: 'gray.900',
          },
        },
        outlineDark: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'gray.900',
          border: '2px',
          borderColor: 'gray.900',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'gray.900',
            color: 'white',
          },
        },
        alert: {
          bg: 'alert.100',
          borderRadius: 'sm',
          color: 'alert.300',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'alert.200',
          },
        },
        success: {
          bg: 'success.100',
          borderRadius: 'sm',
          color: 'success.300',
          height: {base: '38px', md: '48px'}, 
          fontSize: {base: '0.875rem', md: '1rem'},
          fontWeight: '600',
          _hover: {
            bg: 'success.200',
          },
        },
      },
    },
    Link: {
      variants: {
        default: {
          bg: 'none',
          borderRadius: 'sm',
          color: 'gray.900',
          padding: '12px',
          fontWeight: 'bold',
          _hover: {
            textDecoration: 'none',
            bg: 'gray.100',
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
    Tag: {
      baseStyle: {
        container: {
          bg: 'brand.100',
          color: 'brand.400',
          borderRadius: 'base',
          fontSize: '0.875rem',
          fontWeight: 400,
        },
      },
    },
    Heading: {
      variants: {
        'Heading-1-700': {
          color: 'gray.800',
          fontSize: '2.75rem',
          fontWeight: 700,
        },
        'Heading-2-600': {
          color: 'gray.800',
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        'Heading-3-600': {
          color: 'gray.800',
          fontSize: '2rem',
          fontWeight: 600,
        },
        'Heading-3-500': {
          color: 'gray.800',
          fontSize: '2rem',
          fontWeight: 500,
        },
        'Heading-4-600': {
          color: 'gray.800',
          fontSize: '1.75rem',
          fontWeight: 600,
        },
        'Heading-4-500': {
          color: 'gray.800',
          fontSize: '1.75rem',
          fontWeight: 500,
        },
        'Heading-5-600': {
          color: 'gray.800',
          fontSize: '1.5rem',
          fontWeight: 600,
        },
        'Heading-5-500': {
          color: 'gray.800',
          fontSize: '1.5rem',
          fontWeight: 500,
        },
        'Heading-6-600': {
          color: 'gray.800',
          fontSize: '1.25rem',
          fontWeight: 600,
        },
        'Heading-6-500': {
          color: 'gray.800',
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        'Heading-7-600': {
          color: 'gray.800',
          fontSize: '1rem',
          fontWeight: 600,
        },
        'Heading-7-500': {
          color: 'gray.800',
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    Text: {
      variants: {
        'body-1-400': {
          color: 'gray.700',
          fontSize: '1rem',
          fontWeight: 400,
        },
        'body-1-600': {
          color: 'gray.700',
          fontSize: '1rem',
          fontWeight: 600,
        },
        'body-2-400': {
          color: 'gray.700',
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        'body-2-500': {
          color: 'gray.700',
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
    },
  },
});

export { theme };
