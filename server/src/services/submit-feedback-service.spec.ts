import { SubmitFeedbackService } from "./submit-feedback-service";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

describe("Submit feedback", () => {
  it("should be able to submit a feedback - valid", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should be able to submit a feedback - invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example",
        screenshot: "XXXX",
      })
    ).rejects.toThrow();
  });

  it("should be able to submit a feedback - empty type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example",
        screenshot: "XXXX",
      })
    ).rejects.toThrow();
  });

  it("should be able to submit a feedback - empty comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "XXXX",
      })
    ).rejects.toThrow();
  });
});
