import { Field, Float, ObjectType } from "@nestjs/graphql";
import { GraphQLScalarType, Kind } from 'graphql';

@ObjectType()
export class PaymentBreakDown {
    @Field(() => Float, {nullable:false})
    amount!: Number;
    @Field(() => Float, {nullable:false})
    profit!: number;
    @Field(() => Float, {nullable:false})
    returnOfCapital!: Number;
}

export const GraphQLDateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A custom scalar type for DateTime',
  serialize(value: any) {
    // Convert outgoing Date to ISOString for JSON
    return value instanceof Date ? value.toISOString() : null;
  },
  parseValue(value: any) {
    // Convert incoming ISOString to Date
    return typeof value === 'string' ? new Date(value) : null;
  },
  parseLiteral(ast) {
    // Convert hard-coded AST string to Date
    return ast.kind === Kind.STRING ? new Date(ast.value) : null;
  }
});


