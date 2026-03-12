import Text "mo:core/Text";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      switch (Text.compare(submission1.name, submission2.name)) {
        case (#equal) { Text.compare(submission1.email, submission2.email) };
	      case (order) { order };
      };
    };
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("All fields are required");
    };
    let submission : Submission = { name; email; message };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray().sort();
  };
};
