import styled from "styled-components"
import tw from "twin.macro"

export const Base: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  ${tw`bg-gray-100 py-10 min-h-screen`}
`
