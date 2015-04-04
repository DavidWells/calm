describe('Calm', function () {

  /* Test Mobile Desktop View */
  describe('ME ANGRY', function () {

    var IsThisPersonCalm = isCalm("I AM TALKING LIKE AN ANGRY PERSON");

    it('This person is pissed', function () {
      expect(IsThisPersonCalm).toEqual(false);
    });


  });

  /* Test Flip back to Mobile View */
  describe('ME NOT ANGRY', function () {

    var IsThisPersonCalm = isCalm("I love the FBI"); // returns true; this person is calm and wierd

    it('This Person is not pissed', function () {
      expect(IsThisPersonCalm).toEqual(true);
    });


  });



});
