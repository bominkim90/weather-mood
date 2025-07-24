# Gemini PR Review Style Guide

## Language

- **All reviews must be written in Korean.**
- Please write all review comments, suggestions, and explanations in Korean so that the entire team can easily understand.
- Reviews written in English are discouraged, as they may be difficult for team members to understand.

## General Review Rules

- Ensure that code is readable and maintainable.
- Check that variable and function names are meaningful and descriptive.
- Verify that there is no unnecessary or duplicate code.

## TypeScript

- Types should be as narrow as possible.
  - For example, avoid using `any`; use specific types instead.
  - Avoid overly broad types such as `string | number`.

- When using `unknown`, ensure that proper type guards are implemented.

## Test

- All features must be covered by automated tests.
- Confirm that unit or integration tests are included.
- If a change is missing tests, request their addition through review comments.

## Style

- Follow the project's Prettier and ESLint configurations.
- Ensure code formatting is consistent throughout the codebase.

---

<!-- # React Project PR Review Guide

## Language
- All code reviews and comments must be written in Korean.

## What to Review

1. **Component Design**
   - Is each component focused on a single responsibility?
   - Are components split into reusable and presentational parts appropriately?

2. **State Management**
   - Is state managed at the minimal, correct scope?
   - Is there any unnecessary prop drilling or global state?

3. **TypeScript Usage**
   - Are all variables, function parameters, and component props properly typed?
   - Avoid usage of `any` and overly broad union types.

4. **Naming & Style**
   - Follow project Prettier and ESLint rules.
   - Use descriptive and consistent names for variables, functions, and components.

5. **Testing**
   - Are new features and bug fixes covered by automated tests?
   - Are there sufficient unit and integration tests?

6. **UI/UX & Accessibility**
   - Are semantic HTML tags used?
   - Are accessibility (a11y) considerations (ARIA, keyboard navigation) implemented?

7. **Async & Error Handling**
   - Are API calls and async logic handled safely?
   - Are loading, error, and success states properly reflected in the UI?

8. **Performance**
   - Is unnecessary re-rendering avoided?
   - Are hooks like useMemo and useCallback used where needed?

## Additional Notes

- All review comments should be clear, actionable, and written in Korean.
- If tests are missing, please request them via comments. -->
