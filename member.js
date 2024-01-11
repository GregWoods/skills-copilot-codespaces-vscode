function skillsMember() {
  // 1. get the skills
  // 2. get the member
  // 3. add the skills to the member
  // 4. return the member
  return getSkills()
    .then((skills) => {
      return getMember()
        .then((member) => {
          return addSkillsToMember(skills, member);
        });
    });
}