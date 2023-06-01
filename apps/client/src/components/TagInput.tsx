import { useState } from 'react';
import { Box, Input, Button, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';

function TagInput() {
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    setTags((prevTags) => [...prevTags, '']);
  };

  const handleTagChange = (index, value) => {
    setTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags[index] = value;
      return updatedTags;
    });
  };

  const handleRemoveTag = (index) => {
    setTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags.splice(index, 1);
      return updatedTags;
    });
  };

  return (
    <Box>
      {tags.map((tag, index) => (
        <Tag key={index} variant="solid" colorScheme="blue" mr="2" mb="2">
          <TagLabel>{tag}</TagLabel>
          <TagCloseButton onClick={() => handleRemoveTag(index)} />
        </Tag>
      ))}
      <Box display="flex" alignItems="center">
        {tags.map((tag, index) => (
          <Input
            key={index}
            value={tag}
            onChange={(e) => handleTagChange(index, e.target.value)}
            placeholder="Tag"
            mr="2"
          />
        ))}
        <Button onClick={handleAddTag} colorScheme="blue" size="sm">
          +
        </Button>
      </Box>
    </Box>
  );
}

export default TagInput;
