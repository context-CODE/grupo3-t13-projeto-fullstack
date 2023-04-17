import { Flex} from "@chakra-ui/react"
import ProductCard from "../baseComponents/ProductCard"


const CardList = () => {
  return (
    <Flex columnGap={'48px'} rowGap={'78px'} wrap={'wrap'} marginBottom={'78px'} marginTop={'52px'} bgColor={'aquamarine'}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Flex>
  )
}

export default CardList