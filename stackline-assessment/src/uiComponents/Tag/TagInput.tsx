import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TagsInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface TagsInputProps {
  tags: string[];
}

export const TagsInput: React.FC<TagsInputProps> = ({ tags }) => {
  return (
    <TagsInputContainer>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </TagsInputContainer>
  );
};

export default TagsInput;
