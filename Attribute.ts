export interface Attributes {
  attribute: Attribute[];
}

export interface Attribute {
  name: string;
  minOccurs: number;
  maxOccurs: number;

  // Flag indicating if null is an acceptable value for the attribute.
  nillable: boolean;

  // The java class that values of this attribute are bound to.
  binding: string;

  // Returns the length of this attribute. It's usually non null only for string and numeric types
  length: number;
}
