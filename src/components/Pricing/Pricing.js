import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './StylePricing';

const price = [
    {webtype: 'simple cms website',price: 10000,time:'5-7Days'},

    {webtype: 'blog website',price: 12000,time:'5-6Days'},

    {webtype: 'custom cms website',price: 12000,time:'8-9Days'},

    {webtype: 'forums and news website',price: 8000,time:'15-17Days'},

    {webtype: 'classified website',price: 20000,time:'18-20Days'},

    {webtype: 'simple e-commerce website',price: 35000,time:'10-17Days'},

    {webtype: 'e-commerce with blog site',price: 40000,time:'15-17Days'},

    {webtype: ' custom e-commerce website',price: 45000,time:'25-27Days'},

    {webtype: 'standard e-commerce website',price: 60000,time:'25-27Days'},

    {webtype: 'personal portfolio website',price: 5000,time:'5-7Days'},

    {webtype: 'personal portfolio website with blog site',price: 20000,time:'15-17Days'}

]

const Pricing = () => {
  return  ( 
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Pricing</SectionTitle>
  <SectionText>
    I've  affordable  range of website development  cost for my beautiful clients.
  </SectionText>
  <List>
   {price.map((price,index)=>(
      <ListItem>
      <ListContainer>
         <ListTitle>
             {`${price.webtype}`.toUpperCase()}
         </ListTitle>
         <ListParagraph style={{fontSize:'21px'}}>
             {`₹${price.price}`}
             
         </ListParagraph>
         <ListParagraph>
             {`${price.time}`}
             
         </ListParagraph>
        
      </ListContainer>
      </ListItem> 
   ))}
  </List>
  <SectionDivider colorAlt />
  </Section>
)
  }
export default Pricing;
