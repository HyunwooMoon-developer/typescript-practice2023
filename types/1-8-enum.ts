{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday, //0
    Tuesday, //1
    WednesDay, //2
    Thursday, //3
    Friday, // 4
    Saturday, //5
    Sunday, //6
  }

  enum Days2 {
    Monday = 1, //1
    Tuesday, //2
    WednesDay, //3
    Thursday, //4
    Friday, // 5
    Saturday, //6
    Sunday, //7
  }

  enum Days3 {
    Monday = 'monday',
    Tuesday = 'tuesday',
    WednesDay = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
  }

  console.log(Days.Friday);
}
