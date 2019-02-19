import { Resolver, Mutation, Arg } from "type-graphql";

interface SomeInput {
  email: string;
}

@Resolver()
export default class SomeResolver {
  @Mutation(() => Boolean)
  async something(@Arg("data") { email }: SomeInput): Promise<boolean> {
    return Promise.resolve(true);
  }
}
