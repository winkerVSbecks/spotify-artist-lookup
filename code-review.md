```yaml
project: Spotify Artist Lookup Demo
reviewer: kevin.sivabalan
prepared: 2016-03-01
timeSpent: 60 minutes
metrics:
  - TDD: 0
  - Solid Architecture: 0
  - Clean Code: 1.5
  - Rangle Flow: N/A
  - Security: 2
  - Total: 3.5
```

- [ ] TDD
  - [ ] Are there unit tests
  - [ ] Is there a code coverage report
  - [ ] Are the tests reasonable
  - [ ] Is CI setup with a failure threshold

- [ ] Solid Architecture
  - [ ] Is there an architecture that can be explained
  - [ ] Does the team have a consistent understanding of the architecture
  - [ ] Does the code reflect the architecture
  - [ ] README.md / documentation explaining the architecture
  - [ ] README.md explaining environment setup and how to run

- [x] Clean Code
  - [x] Single-purpose services, functions, modules, etc
  - [x] Files of reasonable length
  - [x] Is the code easy to reason about, does it pass the 'sniff test'
  - [x] Is there a consistent naming convention for files, folders, services, etc
  - [ ] Appropriate documentation - jsDoc, readme, etc

- [x] Proper PR practices & Rangle FLow
  - [ ] Reasonably sized PRs
  - [ ] Descriptive PRs
  - [ ] 'noisy commits' squashed
  - [ ] PR's linked to appropiate stories, Pivotal integration if applicable (N/A on this project)
  - [ ] PRs only merged after getting a :shipit:
  - [ ] Environment per-PR available
  - [ ] TS Linting (ESLint, JSHint) setup to run on CI
  - [ ] scss-lint in use, and setup to run on CI (N/A on this project)

- [x] Security
  - [x] No cookies are used, if used have been reviewed and found acceptable
  - [x] No HTML injection or HTML injection strategy has been reviewed and found acceptable
  - [x] No server-side code or server-side code has been reviewed within the last month for conformance with Rangle's security best practices and found to be acceptable
  - [x] Packages and dependencies are up to date, or older versions being used for an acceptable reason

# Observations and Resolutions

## Testing and Coverage
N/A

## Architecture
N/A

## Code Cleanliness
Trailing Commas at the end of objects are everywhere. Shouldn't the linter catch these?

```
const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  searchBox: {
    height: 40,
    borderColor: clrs.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
  },
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
```

Might want to pull out `class SpotifyArtistLookup` from index.js.
index.js seems to be handling the bootstrapping of the project while `class SpotifyArtistLookup` seems to be addressing the routing or initial load.

Artist.js and NavigationBar.js don't feel like components (they don't extend the components class at the very least). Maybe they belong in another category/folder? (Views?)

## PR's and Flow
N/A
## Security
N/A
