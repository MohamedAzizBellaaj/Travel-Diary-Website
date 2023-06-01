import { Select, Box } from '@chakra-ui/react';

function CountryDropdown({  name,onChange }) {
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
  ];

  return (
    <Box>
      <Select  name={name} onChange={onChange}>
        {countries.map((country) => (
          <option key={country} >
            {country}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default CountryDropdown;
